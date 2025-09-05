import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Vault",
  description: "Links to valuable resources I've come across.",
};

export default async function VaultPage() {
  const vaultItems = [
    {
      title: "Creator Kiwi",
      description:
        "Easily create short links that track conversions. See which content drives leads and revenue.",
      image: "/images/creatorkiwi.png",
      url: "https://creator.kiwi/6c2tkYP",
      tags: ["tools", "companies"],
    },
    {
      title: "Superwhisper",
      description:
        "AI-powered voice-to-text. Write 3x faster without lifting a finger.",
      image: "/images/superwhisper.png",
      url: "https://creator.kiwi/U0ybKgC",
      tags: ["tools", "companies"],
    },
    {
      title: "Seline",
      description: "Simple and privacy-focused web analytics.",
      url: "https://creator.kiwi/UCIHlnZ",
      image: "/images/seline.png",
      tags: ["tools"],
    },
    {
      title: "Cubic",
      description: "AI code review",
      tags: ["tools"],
      url: "https://creator.kiwi/STOFcz3",
      image: "/images/cubic.jpg",
    },
    {
      title: "Mobbin",
      description: "UI inspiration library for web and mobile apps.",
      url: "https://creator.kiwi/tHC9ffp",
      image: "https://mobbin.com/og_image.png",
      tags: ["tools"],
    },
    {
      title: "Nicelydone",
      description: "Web UI inspiration library with great AI search.",
      url: "https://creator.kiwi/9Siwon1",
      image: "https://i.imgur.com/oKheXYV.jpeg",
      tags: ["tools"],
    },
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
      title: "WorkOS",
      description:
        "Easily add authentication and enterprise features to your app.",
      url: "https://workos.com/",
      image:
        "https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/627321b887917b110d342e2b_homepage.png",
      tags: ["companies"],
    },
    {
      title: "Railway",
      description: "Easily ship backend apps/services.",
      url: "https://creator.kiwi/aN7Oun3",
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
      image: "https://cursor.com/en/opengraph-image.png",
      tags: ["companies"],
    },
    {
      title: "Screen Studio",
      description: "Create beautiful screen recordings.",
      url: "https://caccamise.link/screen",
      image: "https://screen.studio/og-main-2.png",
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
        <p>Links to valuable tools and resources I&apos;ve come across.</p>
        <span className="text-sm">
          I may earn a commission from some links (thank you for supporting me).
        </span>
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
