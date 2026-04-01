import Footer from "@/components/ui/footer";
import NavigationMenu from "@/components/ui/navigation-menu";
import Sidebar from "@/components/ui/sidebar";
import { menuItems } from "./menu-items";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-app-bg p-4 md:p-8">
      {/* Desktop window chrome */}
      <div className="win2k-window mx-auto max-w-4xl">
        {/* Title bar */}
        <div className="win2k-titlebar select-none">
          {/* Window icon */}
          <span className="text-xs">🖥</span>
          <span>Cole Caccamise — Personal Website</span>
          <div className="ml-auto flex gap-1">
            <button className="win2k-btn !min-w-0 h-[18px] w-[18px] p-0 flex items-center justify-center text-[10px] leading-none font-bold">_</button>
            <button className="win2k-btn !min-w-0 h-[18px] w-[18px] p-0 flex items-center justify-center text-[10px] leading-none font-bold">□</button>
            <button className="win2k-btn !min-w-0 h-[18px] w-[18px] p-0 flex items-center justify-center text-[10px] leading-none font-bold">✕</button>
          </div>
        </div>

        {/* Menu bar */}
        <NavigationMenu menuLinks={menuItems} />

        {/* Window body */}
        <div className="flex min-h-[600px] bg-[#d4d0c8]">
          <Sidebar menuLinks={menuItems} />

          {/* Main content pane */}
          <div
            className="flex-1 overflow-auto p-6 md:p-8"
            style={{
              borderTop: "2px solid #808080",
              borderLeft: "2px solid #808080",
              background: "#ffffff",
            }}
          >
            {children}
            <Footer />
          </div>
        </div>

        {/* Status bar */}
        <div
          className="flex items-center gap-4 px-3 py-1 text-xs"
          style={{
            background: "#d4d0c8",
            borderTop: "1px solid #808080",
          }}
        >
          <span
            className="win2k-inset px-2 py-0.5 text-xs"
            style={{ background: "#d4d0c8" }}
          >
            Ready
          </span>
          <span
            className="win2k-inset px-2 py-0.5 text-xs"
            style={{ background: "#d4d0c8" }}
          >
            colecaccamise.com
          </span>
        </div>
      </div>

      {/* Taskbar */}
      <div
        className="fixed bottom-0 left-0 right-0 flex items-center gap-2 px-2 py-1"
        style={{
          background: "#d4d0c8",
          borderTop: "2px solid #ffffff",
          height: "36px",
          zIndex: 50,
        }}
      >
        <button
          className="win2k-btn flex items-center gap-1 font-bold"
          style={{ fontSize: "0.75rem", padding: "2px 8px" }}
        >
          <span>🪟</span> Start
        </button>
        <div
          className="h-full w-px"
          style={{ background: "#808080", marginLeft: "2px", marginRight: "2px" }}
        />
        <div
          className="win2k-inset flex flex-1 items-center px-2 py-0.5 text-xs font-bold"
          style={{ background: "#d4d0c8", maxWidth: "200px" }}
        >
          🖥 Cole Caccamise
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div
            className="win2k-inset flex items-center gap-1 px-2 py-0.5 text-xs"
            style={{ background: "#d4d0c8" }}
          >
            🔊 EN
          </div>
          <div
            className="win2k-inset px-2 py-0.5 text-xs"
            style={{ background: "#d4d0c8" }}
            suppressHydrationWarning
          >
            {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </div>
        </div>
      </div>
    </div>
  );
}

