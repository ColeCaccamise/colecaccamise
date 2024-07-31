import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links",
  description: `Links to Cole Caccamise's social profiles and projects in one place.`,
  openGraph: {
    title: "Links",
    description: `Links to Cole Caccamise's social profiles and projects in one place.`,
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
