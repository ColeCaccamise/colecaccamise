import { MetadataRoute } from "next";
import { getAllCollectionMeta } from "@/lib/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // get all letters and stack items
  const [letters, stackItems] = await Promise.all([
    getAllCollectionMeta("letters"),
    getAllCollectionMeta("stack"),
  ]);

  // base urls
  const baseUrls = [
    {
      url: "https://colecaccamise.com",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: "https://colecaccamise.com/drops",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://colecaccamise.com/letters",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://colecaccamise.com/links",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: "https://colecaccamise.com/stack",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: "https://colecaccamise.com/jobs",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: "https://colecaccamise.com/vault",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  // generate letter urls
  const letterUrls = letters.map((letter) => ({
    url: `https://colecaccamise.com/letters/${letter.slug}`,
    lastModified: letter.published ? new Date(letter.published) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // generate stack urls
  const stackUrls = stackItems.map((item) => ({
    url: `https://colecaccamise.com/stack/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...baseUrls, ...letterUrls, ...stackUrls];
}
