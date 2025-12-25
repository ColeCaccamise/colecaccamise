"use client";

import { usePathname, useRouter } from "next/navigation";
import SidebarLink from "./sidebar-link";
import Avatar from "./avatar";
import { useHotkeys } from "react-hotkeys-hook";
import { cn } from "@/lib/utils";

export default function Sidebar({
  menuLinks,
}: {
  menuLinks: { name: string; href: string; new?: boolean; kbd?: string }[];
}) {
  const pathname = usePathname();
  const router = useRouter();

  useHotkeys("1", () => router.push("/"));
  useHotkeys("2", () => router.push("/letters"));
  useHotkeys("3", () => router.push("/drops"));
  useHotkeys("4", () => router.push("/stack"));

  const isActive = (href: string) => {
    return href === "/" ? pathname === href : pathname.startsWith(href);
  };

  return (
    <aside className={`sticky top-0 hidden h-screen w-[170px] py-20 md:block`}>
      <nav
        className="flex h-full w-full flex-col gap-12 overflow-visible"
        aria-label="Desktop navigation"
      >
        <div className="flex w-full flex-col items-start gap-4 text-left">
          <Avatar />
          <div>
            <span className="whitespace-nowrap text-lg font-medium">
              Cole Caccamise
            </span>
            <p className="whitespace-nowrap">Game Developer</p>
          </div>
        </div>

        <ul className="flex list-none flex-col gap-4 space-y-0">
          {menuLinks.map((link) => (
            <li key={link.href}>
              <SidebarLink
                href={link.href}
                active={
                  link.href === "/"
                    ? pathname === link.href
                    : pathname.startsWith(link.href)
                }
              >
                <span className="flex w-full items-center justify-between gap-1">
                  {link.name}
                  {link.kbd && (
                    <kbd
                      className={cn(
                        isActive(link.href) && "text-high-contrast-text",
                      )}
                    >
                      {link.kbd}
                    </kbd>
                  )}
                </span>
                {link.new && (
                  <div className="flex w-fit items-center justify-center rounded-full bg-primary px-2 py-1">
                    <div className="text-xs">NEW</div>
                  </div>
                )}
              </SidebarLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
