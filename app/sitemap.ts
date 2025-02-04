import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://colecaccamise.com",
      lastModified: new Date(),
    },
    {
      url: "https://colecaccamise.com/drops",
      lastModified: new Date(),
    },
    {
      url: "https://colecaccamise.com/letters",
      lastModified: new Date(),
    },
    {
      url: "https://colecaccamise.com/links",
      lastModified: new Date(),
    },
    {
      url: "https://colecaccamise.com/stack",
      lastModified: new Date(),
    },
    {
      url: "https://colecaccamise.com/jobs",
      lastModified: new Date(),
    },
    {
      url: "https://colecaccamise.com/vault",
      lastModified: new Date(),
    },
  ];
}
