import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/app/styles/btn.css";
import { Toaster } from "sonner";
import Sidebar from "@/components/ui/sidebar";
import NavigationMenu from "@/components/ui/navigation-menu";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://colecaccamise.com"),
  title: {
    template: "%s | Cole Caccamise",
    default: "Cole Caccamise - Solopreneur, Software Engineer, & Designer",
  },
  description:
    "Cole Caccamise is a solopreneur, software engineer, and designer.",
  twitter: {
    title: {
      template: "%s | Cole Caccamise",
      default: "Cole Caccamise - Solopreneur, Software Engineer, & Designer",
    },
    description:
      "Cole Caccamise is a software engineer, designer, and creator.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 800,
        height: 600,
      },
    ],
  },
  openGraph: {
    title: {
      template: "%s | Cole Caccamise",
      default: "Cole Caccamise - Solopreneur, Software Engineer, & Designer",
    },
    description:
      "Cole Caccamise is a software engineer, designer, and creator.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 800,
        height: 600,
        alt: "Cole Caccamise",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} dark:dark overflow-x-hidden bg-app-bg text-high-contrast-text`}
      >
        <Toaster
          toastOptions={{
            duration: 4000,
            className: "select-none",
          }}
        />
        <PlausibleProvider
          domain="colecaccamise.com"
          trackOutboundLinks={true}
          taggedEvents={true}
        >
          <NavigationMenu menuLinks={menuLinks} />
          <div className="mx-auto flex min-h-screen w-full max-w-4xl gap-12 px-8">
            <Sidebar menuLinks={menuLinks} />

            <div className="flex h-min w-full flex-col gap-16 overflow-visible py-8 md:gap-24 md:py-20">
              <div>{children}</div>

              <Footer />
            </div>
          </div>
        </PlausibleProvider>
      </body>
    </html>
  );
}
