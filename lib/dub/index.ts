import { Dub } from "dub";
import { addTagParam, geoLocateLink, isAmazonUrl } from "@/lib/amazon";

const DUB_API_KEY = process.env.DUB_API_KEY;

const dub = new Dub({
  token: DUB_API_KEY,
});

type Link = { url: string; key?: string; comments?: string };

export async function isKeyAvailable(key: string): Promise<boolean> {
  try {
    const res = await dub.links.get({
      domain: "caccamise.link",
      key: key,
    });

    if (res) {
      return false;
    } else {
      return true;
    }
  } catch (error: any) {
    const dubError = error.error;

    if (dubError.code === "not_found") {
      return true;
    } else {
      return false;
    }
  }
}

export async function createLink(url: string, key?: string, comments?: string) {
  if (!url) return null;

  await createLinks([{ url, key, comments }]);
}

export async function createLinks(links: Link[]) {
  if (!links) return null;

  const linkPromises = links.map(async (link: Link) => {
    let geoLocatedLink = null;
    let defaultUrl = link.url;

    const url = new URL(link.url);

    const searchQuery = url.searchParams.get("k");

    if (searchQuery) {
      const encodedQuery = encodeURIComponent(searchQuery);

      defaultUrl = isAmazonUrl(link.url)
        ? addTagParam(`https://www.amazon.com/s?k=${encodedQuery}`)
        : link.url;

      geoLocatedLink = await geoLocateLink(link.url);
    } else {
      geoLocatedLink = await geoLocateLink(link.url);
      defaultUrl = isAmazonUrl(link.url) ? addTagParam(link.url) : link.url;
    }

    return {
      url: defaultUrl,
      key: link?.key,
      comments: link?.comments,
      geo: geoLocatedLink,
    };
  });

  const preparedLinks: Link[] = await Promise.all(linkPromises);

  const dubLinks = await dub.links.createMany(preparedLinks);

  return dubLinks;
}
