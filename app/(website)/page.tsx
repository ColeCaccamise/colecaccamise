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
      description: "Indie game studio.",
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
              I&apos;m a final year computer science student and software
              engineer intern.
            </p>
            <p>
              In my spare time I build things for myself and make games in
              Unreal Engine 5.
            </p>
          </div>
        </div>

        <NewsletterSignup
          formId="5584232"
          title="The Letter"
          description={
            <span>
              Documenting the process of{" "}
              <Link href="/letters" className="hover:opacity-90">
                building my businesses
              </Link>
              . Sharing lessons I learn and interesting resources I find.
            </span>
          }
        />

        <ListContainer title="Ventures" description="Projects I'm working on">
          <Listicle collection={ventures} kind="ventures" />
        </ListContainer>

        <ListContainer
          title="Featured Drops"
          description="Premium digital products I’ve created recently"
        >
          <Listicle collection={drops} kind="drops" />
        </ListContainer>

        <ListContainer
          title="Featured Letters"
          description="Recent posts from my newsletter"
        >
          <Listicle collection={letters} kind="letters" />
        </ListContainer>

        <ListContainer
          title="Stack"
          description="Tools and products I use daily"
        >
          <Listicle collection={stack} kind="stack" />
        </ListContainer>

        <div id="connect" className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span>Connect</span>
            <p>
              Reach me directly at{" "}
              <Link
                className="hover:opacity-90"
                href="mailto:cole@colecaccamise.com"
              >
                cole@colecaccamise.com
              </Link>{" "}
              or connect on social media below.
            </p>

            <p>
              I enjoy meeting fellow developers and creators, so feel free to{" "}
              <Link href="https://cal.link/cole">schedule a quick call</Link>!
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
