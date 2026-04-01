"use client";

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

  // Desktop menu bar (always shown inside the window chrome)
  return (
    <>
      {/* Desktop menu bar */}
      <div
        className="hidden items-center gap-0 px-2 py-0.5 md:flex"
        style={{
          background: "#d4d0c8",
          borderBottom: "1px solid #808080",
          fontSize: "0.75rem",
        }}
      >
        {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((item) => (
          <button
            key={item}
            className="px-3 py-0.5 text-xs text-black hover:bg-[#000080] hover:text-white"
            style={{ background: "transparent", border: "none", cursor: "default" }}
          >
            {item}
          </button>
        ))}
        <div className="mx-1 h-4 w-px" style={{ background: "#808080" }} />
        {menuLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-0.5 text-xs no-underline ${
              (link.href === "/" ? pathname === link.href : pathname.startsWith(link.href))
                ? "bg-[#000080] text-white"
                : "text-black hover:bg-[#000080] hover:text-white"
            }`}
            style={{ textDecoration: "none" }}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile nav */}
      <nav
        className="block w-full md:hidden"
        style={{
          background: "#d4d0c8",
          borderBottom: "2px solid #808080",
        }}
        aria-label="Mobile navigation"
      >
        <div className="flex w-full items-center justify-between px-3 py-2">
          <Link
            href="/"
            className="flex select-none flex-col"
            style={{ textDecoration: "none", color: "#000000" }}
          >
            <span className="text-sm font-bold">Cole Caccamise</span>
            <span className="text-xs" style={{ color: "#444444" }}>
              Game Developer
            </span>
          </Link>

          <button
            className="win2k-btn text-xs"
            onClick={() => setMenuOpen((prev) => !prev)}
            style={{ padding: "2px 8px" }}
          >
            ☰ Menu
          </button>
        </div>

        {menuOpen && (
          <ul
            className="list-none border-t"
            style={{ borderTop: "1px solid #808080" }}
          >
            {menuLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 text-sm no-underline ${
                    (link.href === "/" ? pathname === link.href : pathname.startsWith(link.href))
                      ? "bg-[#000080] text-white font-bold"
                      : "text-black hover:bg-[#b8d4e8]"
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}

