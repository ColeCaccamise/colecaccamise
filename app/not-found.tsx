"use client";

import Footer from "@/components/ui/footer";
import NavigationMenu from "@/components/ui/navigation-menu";
import Sidebar from "@/components/ui/sidebar";
import Link from "next/link";
import { Logger } from "next-axiom";
import { usePathname } from "next/navigation";
import { menuItems } from "./(website)/menu-items";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  const log = new Logger();
  const pathname = usePathname();

  if (!pathname.startsWith("/_next")) {
    log.warn("Page not found", {
      pathname,
    });
  }

  return (
    <>
      <NavigationMenu menuLinks={menuItems} />
      <div className="mx-auto flex min-h-screen w-full max-w-4xl gap-12 px-8">
        <Sidebar menuLinks={menuItems} />

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
