import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/app/styles/btn.css";
import { Toaster } from "sonner";
import { CSPostHogProvider } from './providers'

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
          <CSPostHogProvider>
            <>{children}</>
          </CSPostHogProvider>
        </PlausibleProvider>
      </body>
    </html>
  );
}
