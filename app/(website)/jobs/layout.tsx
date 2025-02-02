import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://colecaccamise.com"),
  title: "Jobs",
  description: "Open positions at Caccamedia",
  openGraph: {
    title: "Jobs",
    description: "Open positions at Caccamedia",
  },
};

export default function JobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
