import { createElement } from "react";
import { notFound } from "next/navigation";
import { importPage } from "nextra/pages";
import { getPageMap } from "nextra/page-map";
import type { MdxFile, PageMapItem } from "nextra";
import type { Drop, Letter, Stack, Job } from "@/types/cms";

type Frontmatter = Drop | Letter | Stack | Job;

const isMdxFile = (item: PageMapItem): item is MdxFile =>
  "name" in item && "frontMatter" in item && !("children" in item);

const applyDraftLabel = <T extends Frontmatter>(frontmatter: T): T => {
  if (frontmatter.status !== "draft") return frontmatter;
  const next: Record<string, unknown> = { ...frontmatter };
  if (typeof next.name === "string") {
    next.name = `${next.name} (DRAFT)`;
  }
  if (typeof next.title === "string") {
    next.title = `${next.title} (DRAFT)`;
  }
  return next as T;
};

const sortItems = <T extends Frontmatter>(items: T[], collection: string): T[] => {
  if (collection === "letters" || collection === "jobs") {
    items.sort((a, b) => {
      const aDate = (a as Letter | Job).published;
      const bDate = (b as Letter | Job).published;
      const dateA = aDate ? new Date(aDate).getTime() : 0;
      const dateB = bDate ? new Date(bDate).getTime() : 0;
      return dateB - dateA;
    });
  }

  items.sort((a, b) => {
    const posA = a.position ?? Infinity;
    const posB = b.position ?? Infinity;
    return posA - posB;
  });

  return items;
};

export const getCollectionBySlug = async (slug: string, collection: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");

  try {
    const { default: MDXContent, metadata } = await importPage([collection, realSlug]);
    const frontmatter = applyDraftLabel((metadata ?? {}) as Frontmatter);

    return {
      meta: { ...frontmatter, slug: realSlug },
      content: createElement(MDXContent),
    };
  } catch {
    return notFound();
  }
};

export const getAllCollectionMeta = async <T extends Frontmatter>(
  collection: string,
  limit?: number,
  exclude?: string,
): Promise<T[]> => {
  try {
    const pageMap = await getPageMap(`/${collection}`);

    let items: Frontmatter[] = pageMap
      .filter(isMdxFile)
      .filter((file) => file.name !== "index")
      .map((file) => ({
        ...(file.frontMatter ?? {}),
        slug: file.name,
      })) as Frontmatter[];

    items = sortItems(items, collection);

    if (exclude) {
      items = items.filter((item) => item.slug !== exclude);
    }

    if (process.env.NODE_ENV !== "development") {
      items = items.filter((item) => item.status !== "draft");
    }

    const effectiveLimit = limit ?? items.length;
    items = items.slice(0, effectiveLimit);

    return items as T[];
  } catch {
    return notFound();
  }
};
