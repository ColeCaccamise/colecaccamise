import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Toaster } from "sonner";
import "@/app/styles/btn.css";
import "./globals.css";

const selineToken = process.env.NEXT_PUBLIC_SELINE_TOKEN;

const defaultTitle = "Cole Caccamise";
const defaultDescription =
  "Cole Caccamise is a game developer creating atmospheric narrative experiences and sharing them on the internet.";

export const metadata: Metadata = {
  metadataBase: new URL("https://colecaccamise.com"),
  title: {
    template: "%s | Cole Caccamise",
    default: defaultTitle,
  },
  description: defaultDescription,
  twitter: {
    title: {
      template: "%s | Cole Caccamise",
      default: defaultTitle,
    },
    description: defaultDescription,
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
      template: "%s | " + defaultTitle,
      default: defaultTitle,
    },
    description: defaultDescription,
    images: [
      {
        url: "/opengraph-image.png",
        width: 800,
        height: 600,
        alt: defaultTitle,
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
      <head>
        <Script
          src="https://sln.colecaccamise.com/seline.js"
          data-token={selineToken}
          strategy="afterInteractive"
          data-api-host="https://sln.colecaccamise.com"
        />
      </head>
      <body
        className={`${GeistMono.className} dark:dark overflow-x-hidden bg-app-bg text-high-contrast-text`}
      >
        <Toaster
          toastOptions={{
            duration: 4000,
            className: "select-none",
          }}
        />
        <Analytics />
        <PlausibleProvider
          domain="colecaccamise.com"
          trackOutboundLinks={true}
          taggedEvents={true}
        >
          <>{children}</>
        </PlausibleProvider>
      </body>
    </html>
  );
}
