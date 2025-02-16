"use server";

import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import VideoPlayer from "@/components/ui/video";
import CustomImage from "@/components/ui/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Drop, Letter, Stack, Job } from "@/types/cms";

type Frontmatter = Drop | Letter | Stack | Job;

const getItemsArray = (collection: string) => {
  if (collection === "drops") {
    return [] as Drop[];
  } else if (collection === "letters") {
    return [] as Letter[];
  } else if (collection === "stack") {
    return [] as Stack[];
  } else if (collection === "jobs") {
    return [] as Job[];
  } else {
    return [];
  }
};

// helpers
export const getCollectionBySlug = async (slug: string, collection: string) => {
  "use server";

  try {
    const realSlug = slug.replace(/\.mdx$/, "");

    const rootDirectory = path.join(process.cwd(), "content", collection);

    const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

    const { frontmatter, content }: { frontmatter: Frontmatter; content: any } =
      await compileMDX({
        source: fileContent,
        options: { parseFrontmatter: true },
        components: { VideoPlayer, Link, CustomImage },
      });

    if (frontmatter.status === "draft") {
      if ("name" in frontmatter) {
        frontmatter.name = frontmatter.name + " (DRAFT)";
      }

      if ("title" in frontmatter) {
        frontmatter.title = frontmatter.title + " (DRAFT)";
      }
    }

    return { meta: { ...frontmatter, slug: realSlug }, content };
  } catch (error) {
    return notFound();
  }
};

export const getAllCollectionMeta = async (
  collection: string,
  limit?: number,
  exclude?: string,
) => {
  try {
    const rootDirectory = path.join(process.cwd(), "content", collection);

    const files = fs.readdirSync(rootDirectory);

    let items: Drop[] | Stack[] | Letter[] | Job[] = getItemsArray(collection);

    for (let i = 0; i < files.length; i++) {
      const file = path.parse(files[i]).name;

      const { meta }: { meta: Drop | Letter | Stack } =
        await getCollectionBySlug(`${file}`, collection);
      items.push(meta as any);
    }

    if (collection === "letters") {
      items.sort((a: Letter, b: Letter) => {
        const dateA = a.published ? new Date(a.published).getTime() : 0;
        const dateB = b.published ? new Date(b.published).getTime() : 0;
        return dateB - dateA;
      });
    } else if (collection === "jobs") {
      items.sort((a: Job, b: Job) => {
        const dateA = a.published ? new Date(a.published).getTime() : 0;
        const dateB = b.published ? new Date(b.published).getTime() : 0;
        return dateB - dateA;
      });
    }

    items.sort((a, b) => {
      // If a.position is undefined, push it to the end by setting it to a higher value (e.g., Infinity)
      const posA = a.position !== undefined ? a.position : Infinity;
      // If b.position is undefined, push it to the end by setting it to a higher value (e.g., Infinity)
      const posB = b.position !== undefined ? b.position : Infinity;

      return posA - posB;
    });

    // Filter out the excluded item
    if (exclude) {
      items = items.filter((item) => item.slug !== exclude);
    }

    if (items.some((item) => item.status === "draft")) {
      if (process.env.NODE_ENV !== "development") {
        items = items.filter((item) => item.status !== "draft");
      }
    }

    // Apply the limit
    const effectiveLimit = limit ?? items.length;
    items = items.slice(0, effectiveLimit);

    return items;
  } catch (error) {
    return notFound();
  }
};
