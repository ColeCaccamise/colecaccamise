import Link from "next/link";
import { getAllCollectionMeta } from "@/lib/mdx";
import ListContainer from "@/components/ui/list/list-container";
import Listicle from "@/components/ui/list/listicle";
import NewsletterSignup from "@/components/ui/newsletter-signup";
import Avatar from "@/components/ui/avatar";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

export default async function Home() {
  const letters = await getAllCollectionMeta("letters", 3);

  const socials = [
    { name: "Twitter", url: "https://caccamise.link/x" },
    { name: "Instagram", url: "https://caccamise.link/ig" },
    { name: "LinkedIn", url: "https://caccamise.link/in" },
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
             Hi, I&apos;m Cole.
            </p>
            <p>I&apos;m an indie game developer at <Link href="https://hyperapta.com?ref=cole" target="_blank" className="text-high-contrast-text hover:opacity-80">Hyperapta Studios</Link>.</p>
            <p>I also make videos on <Link href="https://youtube.com/@colecaccamise" target="_blank" className="text-high-contrast-text hover:opacity-80">YouTube</Link> documenting my journey.</p>
         
          </div>
        </div>

        <NewsletterSignup
          formId="5584232"
          title="The Letter"
          description={
            <span>
              Sharing lessons learned on my journey to becoming a full-time indie game developer.
            </span>
          }
        />

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
                className="group flex items-center gap-1 text-low-contrast-text hover:text-high-contrast-text hover:opacity-80"
              >
                {social.name}

                <ArrowUpRightIcon size={18} />  
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
