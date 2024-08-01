import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://colecaccamise.com"),
  title: "Drops",
  description: "Digital products created by Cole Caccamise.",
  openGraph: {
    title: "Drops",
    description: "Digital products created by Cole Caccamise.",
  },
};

export default function DropsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
