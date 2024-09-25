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
      title: "UE5 Beginner Tutorial",
      description:
        "A fantastic video series on UE5. I had a lot of fun going through this one.",
      url: "https://www.youtube.com/watch?v=L9qixi858Ag&list=PLIn-yd4vnXbjWeYqU7epakdnVzoysMToy",
      image: await getOpenGraphImage(
        "https://www.youtube.com/watch?v=bDUFB1ng00Q",
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
      title: "How to Validate Any SaaS Idea",
      description: "A must-watch for any aspiring SaaS founder.",
      url: "https://www.youtube.com/watch?v=aSMxdBVTcLg",
      image: await getOpenGraphImage(
        "https://www.youtube.com/watch?v=aSMxdBVTcLg",
      ),
      tags: ["videos"],
    },
    {
      title: "Animations on the Web",
      description:
        "Currently going through this course. Teaches you how to create beautiful animations.",
      url: "https://animations.dev",
      image: await getOpenGraphImage("https://animations.dev"),
      tags: ["courses"],
    },
    {
      title: "The Day You Became A Better Writer",
      description: "Read this article right now (it only takes 2 minutes).",
      url: "https://dilbertblog.typepad.com/the_dilbert_blog/2007/06/the_day_you_bec.html",
      image: await getOpenGraphImage("https://dilbert.com/"),
      tags: ["articles"],
    },
    {
      title: "Grow Your Personal Brand as a Designer",
      description:
        "A great talk with Oliur on how to grow your personal brand.",
      url: "https://www.youtube.com/watch?v=dYtzaiqu6Fw",
      image: await getOpenGraphImage(
        "https://www.youtube.com/watch?v=dYtzaiqu6Fw",
      ),
      tags: ["videos"],
    },
    {
      title: "Programming, Viral AI Startups, and Digital Nomad Life",
      description: "An amazing conversation about the nomad lifestyle.",
      url: "https://www.youtube.com/watch?v=oFtjKbXKqbg",
      image: await getOpenGraphImage(
        "https://www.youtube.com/watch?v=oFtjKbXKqbg",
      ),
      tags: ["videos"],
    },

    {
      title:
        "Why Startup Founders Should Launch Companies Sooner Than They Think",
      description: "A great video by YC.",
      url: "https://www.youtube.com/watch?v=Nsx5RDVKZSk",
      image: await getOpenGraphImage(
        "https://www.youtube.com/watch?v=Nsx5RDVKZSk",
      ),
      tags: ["videos"],
    },
    {
      title: "Resend",
      description: "Email for developers.",
      url: "https://resend.com/",
      image: await getOpenGraphImage("https://resend.com"),
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
