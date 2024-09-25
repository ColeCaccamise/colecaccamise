import Footer from "@/components/ui/footer";
import NavigationMenu from "@/components/ui/navigation-menu";
import Sidebar from "@/components/ui/sidebar";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return (
    <>
      <NavigationMenu menuLinks={menuLinks} />
      <div className="mx-auto flex min-h-screen w-full max-w-4xl gap-12 px-8">
        <Sidebar menuLinks={menuLinks} />

        <div className="flex h-min w-full flex-col gap-16 overflow-visible py-8 md:gap-24 md:py-20">
          {children}

          <Footer />
        </div>
      </div>
    </>
  );
}
