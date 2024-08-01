import axios from "axios";
import * as cheerio from "cheerio";

const AMAZON_AFFILIATE_TAG = process.env.AMAZON_AFFILIATE_TAG;

type AmazonUrlParams = {
  countryTLD: string;
  amazonId?: string;
  title?: string;
  encodedQuery?: string;
};

export function isAmazonUrl(url: string): boolean {
  const parsedUrl = new URL(url);

  return parsedUrl.hostname.includes("amazon.com");
}

export function addTagParam(
  url: string,
  tag: string = "ccaccamise-20",
): string {
  try {
    // Create a URL object for easy manipulation
    const urlObj = new URL(url);

    // Check if the parameter already exists
    if (!urlObj.searchParams.has("tag")) {
      // Add the 'tag' parameter
      urlObj.searchParams.append("tag", tag);
    }

    // Return the modified URL as a string
    return urlObj.toString();
  } catch (error) {
    return url; // Return the original URL if there's an error
  }
}

function getAmazonId(pathame: string): string {
  if (pathame.startsWith("/gp/product/")) {
    return pathame.split("/")[3];
  } else {
    const pathParts = pathame.split("/");

    let id = "";

    for (let part in pathParts) {
      if (pathParts[part] === "dp") {
        id = pathParts[parseInt(part) + 1];
      }
    }

    return id;
  }
}

export async function amazonUrl({
  countryTLD,
  amazonId,
  title,
  encodedQuery,
}: AmazonUrlParams) {
  if (encodedQuery) {
    return `https://www.amazon.${countryTLD}/s?k=${encodedQuery}&tag=${AMAZON_AFFILIATE_TAG}`;
  } else {
    const url = `https://www.amazon.${countryTLD}/dp/${amazonId}?tag=${AMAZON_AFFILIATE_TAG}`;

    try {
      await axios.get(url); // check if the link is valid

      return url;
    } catch (error) {
      return encodeURI(
        `https://www.amazon.${countryTLD}/s?k=${title}&tag=${AMAZON_AFFILIATE_TAG}`,
      );
    }
  }
}

export async function geoLocateLink(url: string, encodedQuery?: string) {
  if (!url) return null;

  try {
    if (encodedQuery) {
      return {
        US: await amazonUrl({ countryTLD: "com", encodedQuery }),
        GB: await amazonUrl({ countryTLD: "co.uk", encodedQuery }),
        IT: await amazonUrl({ countryTLD: "it", encodedQuery }),
        FR: await amazonUrl({ countryTLD: "fr", encodedQuery }),
        ES: await amazonUrl({ countryTLD: "es", encodedQuery }),
        CA: await amazonUrl({ countryTLD: "ca", encodedQuery }),
        DE: await amazonUrl({ countryTLD: "de", encodedQuery }),
      };
    } else {
      const parsedUrl = new URL(url);

      if (isAmazonUrl(url)) {
        const amazonId = getAmazonId(parsedUrl.pathname);

        const productTitle = await axios.get(
          `https://www.amazon.com/dp/${amazonId}`,
        );

        const html = productTitle.data;
        const $ = cheerio.load(html);

        let title = $("title").text().trim();

        if (title) {
          // Remove 'Amazon.com:' from the beginning of the title
          title = title.replace(/^Amazon\.com:\s*/, "");

          // Remove 'amazon.com' from anywhere else in the title
          title = title.replace(/\s*amazon\.com\s*/gi, "");
        }

        // do work
        return {
          US: await amazonUrl({ countryTLD: "com", amazonId, title }),
          GB: await amazonUrl({ countryTLD: "co.uk", amazonId, title }),
          IT: await amazonUrl({ countryTLD: "it", amazonId, title }),
          FR: await amazonUrl({ countryTLD: "fr", amazonId, title }),
          ES: await amazonUrl({ countryTLD: "es", amazonId, title }),
          CA: await amazonUrl({ countryTLD: "ca", amazonId, title }),
          DE: await amazonUrl({ countryTLD: "de", amazonId, title }),
        };
      } else {
        return null;
      }
    }
  } catch (error) {
    throw new Error("Invalid URL");
  }
}
