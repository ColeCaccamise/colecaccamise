import Image from "next/image";
import Link from "next/link";
import { getOpenGraphImage } from "@/lib/opengraph";

export const metadata = {
  title: "Vault",
  description: "Links to valuable resources I've come across.",
};

function getYoutubeImage(url: string) {
  const videoId = url.split("v=")[1];
  return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
}

export default async function VaultPage() {
  const vaultItems = [
    {
      title: "Ghostty",
      description: "A fast terminal emulator for macOS.",
      url: "https://ghostty.org/",
      image: "https://ghostty.org/social-share-card.jpg",
      tags: ["tools"],
    },
    {
      title: "Zen Browser",
      description: "A sleak, firefox-based browser.",
      url: "https://zen-browser.app/",
      image: "https://zen-browser.app/share-pic.png",
      tags: ["tools"],
    },
    {
      title: "Yaak",
      description: "A local-first API client.",
      url: "https://yaak.app/",
      image: "https://yaak.app/static/og.png",
      tags: ["tools"],
    },
    {
      title: "Dub.co",
      description: "Create powerful short links.",
      url: "https://refer.dub.co/colecaccamise",
      image: "https://assets.dub.co/thumbnail.jpg",
      tags: ["companies"],
    },
    {
      title: "Railway",
      description: "Easily ship backend apps/services.",
      url: "https://caccamise.link/railway",
      image: "https://railway.app/og.png?v=2",
      tags: ["companies"],
    },
    {
      title: "Resend",
      description: "Email for developers.",
      url: "https://resend.com/",
      image: "https://resend.com/static/cover.png",
      tags: ["companies"],
    },
    {
      title: "Cursor",
      description: "Fast, AI-powered code editor.",
      url: "https://cursor.com",
      image: "https://www.cursor.com/opengraph-image.png",
      tags: ["companies"],
    },
    {
      title: "Claude",
      description: "My favorite LLM for programming and idea generation.",
      url: "https://claude.ai/new",
      image: "https://claude.ai/images/claude_ogimage.png",
      tags: ["companies"],
    },
    {
      title: "Superhuman",
      description: "The fastest and prettiest email client.",
      url: "https://caccamise.link/superhuman",
      image:
        "https://framerusercontent.com/images/kVLfqsm3HAwPB0Y6h08ymuwuE.jpg",
      tags: ["companies"],
    },
    {
      title: "Raycast",
      description: "The best Mac productivity tool.",
      url: "https://www.raycast.com/?via=cole",
      image: "https://www.raycast.com/opengraph-image-pwu6ef.png",
      tags: ["companies"],
    },
  ];

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium">Vault</h1>
        <p>
          Links to valuable tools and resources I&apos;ve come across. More
          added all the time.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {vaultItems.map((item, index) => (
          <Link
            target="_blank"
            key={index}
            href={item.url}
            className="flex flex-col gap-3 rounded-md border-2 border-ui-component-default bg-sidebar-bg p-4"
          >
            <div className="relative w-full pt-[56.25%]">
              <Image
                className="absolute inset-0 rounded-md object-cover"
                src={item.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={item.title || "Vault item"}
              />
            </div>
            <div>
              <h3 className="text-lg font-medium">{item.title || "Title"}</h3>

              <p className="text-sm">{item.description || "Description"}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
