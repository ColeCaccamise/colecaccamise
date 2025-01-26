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
    <>
      <NavigationMenu menuLinks={menuItems} />
      <div className="mx-auto flex min-h-screen w-full max-w-4xl gap-12 px-8">
        <Sidebar menuLinks={menuItems} />

        <div className="flex h-min w-full flex-col gap-16 overflow-visible py-8 md:gap-24 md:py-20">
          {children}

          <Footer />
        </div>
      </div>
    </>
  );
}
