import Image from "next/image";
import Link from "next/link";
import { getOpenGraphImage } from "@/lib/opengraph";

export const metadata = {
  title: "Vault",
  description: "Links to valuable resources I've come across.",
};

export default async function VaultPage() {
  const vaultItems = [
    {
      title: "Speak Like A Leader: Make People Respect You",
      description: "A great watch with Lelia Hormozi and Simon Quibb.",
      url: "https://www.youtube.com/watch?v=fABX411MixY",
      image: await getOpenGraphImage(
        "https://www.youtube.com/watch?v=fABX411MixY",
      ),
      tags: ["videos"],
    },
    {
      title:
        "Jason Fried challenges your thinking on fundraising, goals, growth, and more",
      description: "The case for profitability over growth.",
      url: "https://www.youtube.com/watch?v=dAnF0tk0di8",
      image: await getOpenGraphImage(
        "https://www.youtube.com/watch?v=dAnF0tk0di8",
      ),
      tags: ["videos"],
    },
    {
      title: "Dub.co",
      description: "Create powerful short links.",
      url: "https://refer.dub.co/colecaccamise",
      image: await getOpenGraphImage("https://dub.co/"),
      tags: ["companies"],
    },
    {
      title: "Railway",
      description: "Easily ship backend apps/services.",
      url: "https://caccamise.link/railway",
      image: await getOpenGraphImage("https://railway.app"),
      tags: ["companies"],
    },
    {
      title: "Resend",
      description: "Email for developers.",
      url: "https://resend.com/",
      image: await getOpenGraphImage("https://resend.com"),
      tags: ["companies"],
    },
    {
      title: "Cursor",
      description: "Fast, AI-powered code editor.",
      url: "https://cursor.com",
      image: await getOpenGraphImage("https://cursor.com"),
      tags: ["companies"],
    },
    {
      title: "Claude",
      description: "My favorite LLM for programming and idea generation.",
      url: "https://claude.ai/new",
      image: await getOpenGraphImage("https://claude.ai/new"),
      tags: ["companies"],
    },
    {
      title: "Superhuman",
      description: "The fastest and prettiest email client.",
      url: "https://caccamise.link/superhuman",
      image: await getOpenGraphImage("https://superhuman.com"),
      tags: ["companies"],
    },
    {
      title: "Raycast",
      description: "The best Mac productivity tool.",
      url: "https://www.raycast.com/?via=cole",
      image: await getOpenGraphImage("https://www.raycast.com/"),
      tags: ["companies"],
    },
    {
      title: "Warp",
      description: "AI-powered terminal.",
      url: "https://caccamise.link/warp",
      image: await getOpenGraphImage("https://warp.dev"),
      tags: ["companies"],
    },
    {
      title: "Digital Ocean",
      description:
        "Simple and afforadble VPS hosting. What I use for some of my smaller projects.",
      url: "https://caccamise.link/digitalocean",
      image: await getOpenGraphImage("https://digitalocean.com"),
      tags: ["companies"],
    },
    {
      title: "Kit.com",
      description: "Simple newsletters.",
      url: "https://kit.com",
      image: await getOpenGraphImage("https://kit.com"),
      tags: ["companies"],
    }
  ];

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium">Vault</h1>
        <p>
          Links to valuable resources I&apos;ve come across. More added all the
          time.
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
