import axios from "axios";

export async function getOpenGraphImage(url: string) {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    const ogImageMatch = data.match(
      /<meta\s+(?:property="og:image"\s+content="([^"]+)"|content="([^"]+)"\s+property="og:image")/i,
    );
    if (ogImageMatch && (ogImageMatch[1] || ogImageMatch[2])) {
      return ogImageMatch[1] || ogImageMatch[2];
    }
    console.log("OG:", data);
    // If no og:image is found, return null or a default image URL
    return null; // or return "https://example.com/default-image.jpg";
  } catch (error) {
    console.error(`Error fetching OpenGraph image for ${url}:`, error);
    return null; // or return a default image URL
  }
}
