"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import SidebarLink from "./sidebar-link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavigationMenu({
  menuLinks,
}: {
  menuLinks: { name: string; href: string }[];
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className="block w-full border-b border-borders-non-interactive px-8 py-4 md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="flex select-none flex-col hover:opacity-90">
          <span>Cole Caccamise</span>
          <span className="text-low-contrast-text">Software Engineer</span>
        </Link>

        <button
          className="pointer-cursor z-1 flex h-12 w-12 items-center justify-center rounded-md border border-borders-non-interactive bg-sidebar-bg text-low-contrast-text transition-all hover:border-subtle-borders-interactive hover:bg-ui-component-default hover:text-high-contrast-text"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <HamburgerMenuIcon width={20} height={20} />
        </button>
      </div>

      <ul
        className={`absolute left-0 top-[81px] z-10 flex w-full list-none flex-col items-center gap-4 bg-app-bg py-4 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ overflow: "hidden" }}
      >
        {menuLinks.map((link) => (
          <li
            key={link.href}
            className={`delay-50 transition-opacity duration-300 ease-in-out ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <SidebarLink
              href={link.href}
              active={
                link.href === "/"
                  ? pathname === link.href
                  : pathname.startsWith(link.href)
              }
            >
              <span>{link.name}</span>
            </SidebarLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
