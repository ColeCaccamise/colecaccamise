import Link from "next/link";
import Avatar from "@/components/ui/avatar";
import NewsletterSignup from "@/components/ui/newsletter-signup";
import VideoPlayer from "@/components/ui/video";
import LinkPageItem from "@/components/ui/link-page-item";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import {
  faGithub,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDroplet,
  faPaperPlane,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";

export default function LinksPage() {
  const latestVideo = "https://youtu.be/0JSK0Kk8gAA";

  const links = [
    {
      title: "Weekly Newsletter",
      description: "Insights on how I run my one person business.",
      url: "/letters?via=links",
      icon: faPaperPlane,
      cta: "Read",
    },
    {
      title: "Visibly.co",
      description: "SaaS landing page templates.",
      url: "https://caccamise.link/visibly",
      icon: faWindowMaximize,
      cta: "Explore",
    },
    {
      title: "Twitter / X",
      description: "Sharing what I'm working on.",
      url: "https://caccamise.link/x",
      icon: faXTwitter,
      cta: "Follow",
    },
    {
      title: "Drops",
      description: "Wallpapers, Notion templates, and more.",
      url: "https://colecaccamise.com/drops?via=links",
      icon: faDroplet,
      cta: "Browse",
    },
    {
      title: "YouTube",
      description: "Aesthetic tech videos.",
      url: "https://caccamise.link/youtube",
      icon: faYoutube,
      cta: "Subscribe",
    },
    {
      title: "GitHub",
      description: "Building software and tools.",
      url: "https://git.new/cole",
      icon: faGithub,
      cta: "Visit",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="hidden flex-col gap-4 md:flex">
        <h1 className="text-3xl font-medium">Links</h1>
        <p>Quicklinks to my social platforms and projects.</p>
      </div>

      <div className="flex flex-col items-center gap-2 md:hidden">
        <Avatar />
        <h2>Cole Caccamise</h2>
        <span>Solopreneur, Software Engineer, & Designer</span>
      </div>

      <div className="flex flex-col gap-16">
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-3 rounded-md border-2 border-ui-component-default bg-sidebar-bg p-4">
            <div className="flex items-center justify-between">
              <span>Latest Video</span>
              <Link
                className="flex items-center gap-1 text-sm text-low-contrast-text hover:text-high-contrast-text hover:opacity-90"
                href={latestVideo}
              >
                <span>YouTube</span>
                <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-high-contrast-text">
                  <ArrowRightIcon />
                </span>
              </Link>
            </div>

            <VideoPlayer url={latestVideo} />
          </div>

          <div className="flex flex-col gap-3 rounded-md border-2 border-ui-component-default bg-sidebar-bg p-4">
            <NewsletterSignup
              placeholder="Subscribe to the newsletter"
              location="Links"
            />
          </div>

          {links.map((link, index) => (
            <LinkPageItem
              key={index}
              title={link.title}
              description={link.description}
              url={link.url}
              icon={link.icon}
              cta={link.cta}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
