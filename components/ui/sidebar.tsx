"use client";

import { usePathname, useRouter } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";
import Link from "next/link";
import Avatar from "./avatar";

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
    <aside
      className="hidden w-[180px] flex-shrink-0 flex-col md:flex"
      style={{
        background: "#d4d0c8",
        borderRight: "2px solid #808080",
        minHeight: "100%",
      }}
    >
      {/* Profile card */}
      <div
        className="flex flex-col items-center gap-2 p-4"
        style={{
          background: "#000080",
          color: "#ffffff",
        }}
      >
        <Avatar width={56} height={56} />
        <div className="text-center">
          <div className="text-sm font-bold text-white">Cole Caccamise</div>
          <div className="text-xs text-white opacity-80">Game Developer</div>
        </div>
      </div>

      {/* Folder tree nav */}
      <nav
        className="flex flex-col p-2"
        aria-label="Desktop navigation"
        style={{ flex: 1 }}
      >
        <div
          className="mb-1 px-1 text-xs font-bold"
          style={{ color: "#000080" }}
        >
          📁 Navigation
        </div>
        <ul className="list-none space-y-0">
          {menuLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex items-center gap-1 px-2 py-1 text-xs no-underline ${
                  isActive(link.href)
                    ? "win2k-nav-active"
                    : "hover:bg-[#b8d4e8] text-black"
                }`}
                style={{ textDecoration: "none" }}
              >
                <span>
                  {link.href === "/" ? "🏠" : link.href === "/letters" ? "📄" : link.href === "/drops" ? "📦" : link.href === "/stack" ? "🔧" : "📁"}
                </span>
                {link.name}
                {link.kbd && (
                  <kbd className="ml-auto">{link.kbd}</kbd>
                )}
                {link.new && (
                  <span
                    className="ml-auto rounded-none px-1 text-[10px] font-bold"
                    style={{ background: "#ff0000", color: "#ffffff" }}
                  >
                    NEW
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className="mt-4 mb-1 px-1 text-xs font-bold"
          style={{ color: "#000080" }}
        >
          📁 Quick Links
        </div>
        <ul className="list-none space-y-0">
          {[
            { icon: "▶️", label: "YouTube", href: "https://youtube.com/@colecaccamise" },
            { icon: "🐦", label: "Twitter / X", href: "https://caccamise.link/x" },
            { icon: "📸", label: "Instagram", href: "https://caccamise.link/ig" },
          ].map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                target="_blank"
                className="flex items-center gap-1 px-2 py-1 text-xs text-black no-underline hover:bg-[#b8d4e8]"
                style={{ textDecoration: "none" }}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

