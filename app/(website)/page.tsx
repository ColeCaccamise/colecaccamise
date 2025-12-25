import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { getAllCollectionMeta } from "@/lib/mdx";
import ListContainer from "@/components/ui/list/list-container";
import Listicle from "@/components/ui/list/listicle";
import NewsletterSignup from "@/components/ui/newsletter-signup";
import Avatar from "@/components/ui/avatar";

export default async function Home() {
  const drops = await getAllCollectionMeta("drops", 3);
  const stack = await getAllCollectionMeta("stack", 3);
  const letters = await getAllCollectionMeta("letters", 3);

  const ventures = [
    {
      name: "YouTube | Cole Caccamise",
      description: "Aesthetic tech videos.",
      url: "https://youtube.com/@colecaccamise",
    },
    {
      name: "Hyperapta Studios",
      description: "Creating narrative computer games.",
      url: "https://hyperapta.com",
    },
  ];

  const socials = [
    {
      url: "https://caccamise.link/x",
      icon: faXTwitter,
    },
    {
      url: "https://caccamise.link/ig",
      icon: faInstagram,
    },
    {
      url: "https://caccamise.link/in",
      icon: faLinkedin,
    },
  ];

  return (
    <>
      <main className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-4">
          <div className="block md:hidden">
            <Avatar width={56} height={56} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium">About</span>
            <p>
              Welcome to my site! I like making narrative computer games and
              sharing them on the internet.
            </p>
          </div>
        </div>

        <ListContainer
          title="Ventures"
          description="Projects I'm actively working on"
        >
          <Listicle collection={ventures} kind="ventures" />
        </ListContainer>

        <ListContainer
          title="Recent Letters"
          description="Writing about my experiences and learnings"
        >
          <Listicle collection={letters} kind="letters" />
        </ListContainer>

        <div id="connect" className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span>Connect</span>
            <p>
              Reach me at{" "}
              <Link
                className="hover:opacity-90"
                href="mailto:cole@colecaccamise.com"
              >
                cole@colecaccamise.com
              </Link>{" "}
              or connect on social media below.
            </p>
          </div>

          <div className="flex gap-4">
            {socials.map((social) => (
              <Link
                href={social.url}
                key={social.url}
                className="flex h-12 w-12 items-center justify-center rounded-md border border-borders-non-interactive bg-sidebar-bg text-low-contrast-text hover:border-subtle-borders-interactive hover:bg-ui-component-default hover:text-high-contrast-text"
              >
                <FontAwesomeIcon width={20} icon={social.icon} />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
