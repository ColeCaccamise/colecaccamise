'use client'

import Footer from "@/components/ui/footer";
import NavigationMenu from "@/components/ui/navigation-menu";
import Sidebar from "@/components/ui/sidebar";
import Link from "next/link";
import { Logger } from "next-axiom";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  const menuLinks: { href: string; name: string; new?: boolean }[] = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/letters",
      name: "Letters",
    },
    {
      href: "/drops",
      name: "Drops",
    },
    {
      href: "/stack",
      name: "Stack",
    },
    {
      href: "/vault",
      name: "Vault",
    },
    {
      href: "/links",
      name: "Links",
    },
    {
      href: "/#connect",
      name: "Contact",
    },
  ];

  const log = new Logger();
  const pathname = usePathname()

  if (!pathname.startsWith("/_next")) {
    log.warn("Page not found", {
      pathname,
    });
  }

  return (
    <>
      <NavigationMenu menuLinks={menuLinks} />
      <div className="mx-auto flex min-h-screen w-full max-w-4xl gap-12 px-8">
        <Sidebar menuLinks={menuLinks} />

        <div className="flex h-min w-full flex-col gap-16 overflow-visible py-8 md:gap-24 md:py-20">
          <div className="flex h-full flex-col gap-4">
            <h1>Yikes, that&apos;s a 404.</h1>
            <p>
              This is embarassing, but I couldn&apos;t find what you&apos;re
              looking for.
            </p>
            <Link href="/">Return Home</Link>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
