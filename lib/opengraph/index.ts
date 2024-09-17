import axios from "axios";

export async function getOpenGraphImage(url: string) {
  try {
    if (url.includes("youtube.com")) {
      const videoId = url.split("v=")[1];
      return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
    }

    const response = await axios.get(url);
    const data = await response.data;

    // Regular expressions to match different og:image meta tag formats
    const ogImageRegexes = [
      /<meta\s+property="og:image"\s+content="([^"]+)"/i,
      /<meta\s+content="([^"]+)"\s+property="og:image"/i,
      /<meta\s+name="og:image"\s+content="([^"]+)"/i,
      /<meta\s+content="([^"]+)"\s+name="og:image"/i,
      /<meta\s+property='og:image'\s+content='([^']+)'/i,
      /<meta\s+content='([^']+)'\s+property='og:image'/i,
      /<meta\s+name='og:image'\s+content='([^']+)'/i,
      /<meta\s+content='([^']+)'\s+name='og:image'/i,
    ];

    for (const regex of ogImageRegexes) {
      const match = data.match(regex);
      if (match && match[1]) {
        return match[1];
      }
    }

    // If no og:image is found, return null or a default image URL
    return null; // or return "https://example.com/default-image.jpg";
  } catch (error) {
    console.error(`Error fetching OpenGraph image for ${url}:`, error);
    return null; // or return a default image URL
  }
}
