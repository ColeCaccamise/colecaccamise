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
      label: "Twitter / X",
    },
    {
      url: "https://caccamise.link/ig",
      icon: faInstagram,
      label: "Instagram",
    },
    {
      url: "https://caccamise.link/in",
      icon: faLinkedin,
      label: "LinkedIn",
    },
  ];

  return (
    <>
      <main className="flex flex-col gap-6" style={{ fontFamily: "'Tahoma', Arial, sans-serif" }}>
        {/* About groupbox */}
        <div className="win2k-groupbox">
          <div
            className="win2k-titlebar mb-3 -mx-3 -mt-3 px-3 py-1"
            style={{ fontSize: "0.7rem" }}
          >
            📋 About
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-4">
            <div className="block md:hidden">
              <Avatar width={56} height={56} />
            </div>
            <div>
              <p className="text-sm" style={{ color: "#000000", lineHeight: "1.5" }}>
                Welcome to my site! I like making narrative computer games and sharing them on the internet.
              </p>
            </div>
          </div>
        </div>

        {/* Ventures groupbox */}
        <div className="win2k-groupbox">
          <div
            className="win2k-titlebar mb-3 -mx-3 -mt-3 px-3 py-1"
            style={{ fontSize: "0.7rem" }}
          >
            🚀 Ventures — Projects I&apos;m actively working on
          </div>
          <ListContainer title="">
            <Listicle collection={ventures} kind="ventures" />
          </ListContainer>
        </div>

        {/* Recent Letters groupbox */}
        <div className="win2k-groupbox">
          <div
            className="win2k-titlebar mb-3 -mx-3 -mt-3 px-3 py-1"
            style={{ fontSize: "0.7rem" }}
          >
            📄 Recent Letters — Writing about my experiences and learnings
          </div>
          <ListContainer title="">
            <Listicle collection={letters} kind="letters" />
          </ListContainer>
        </div>

        {/* Connect groupbox */}
        <div id="connect" className="win2k-groupbox">
          <div
            className="win2k-titlebar mb-3 -mx-3 -mt-3 px-3 py-1"
            style={{ fontSize: "0.7rem" }}
          >
            📧 Connect
          </div>
          <p className="mb-3 text-sm" style={{ color: "#000000" }}>
            Reach me at{" "}
            <Link href="mailto:cole@colecaccamise.com" style={{ color: "#000080" }}>
              cole@colecaccamise.com
            </Link>{" "}
            or connect on social media below.
          </p>
          <div className="flex flex-wrap gap-2">
            {socials.map((social) => (
              <Link
                href={social.url}
                key={social.url}
                className="win2k-btn flex items-center gap-2 no-underline"
                style={{ color: "#000000", textDecoration: "none", fontSize: "0.75rem" }}
              >
                <FontAwesomeIcon width={14} icon={social.icon} />
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

