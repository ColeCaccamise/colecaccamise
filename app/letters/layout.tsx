import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://colecaccamise.com"),
  title: "Newsletter",
  description:
    "Newsletters from Cole Caccamise about growing a one person business.",
  openGraph: {
    title: "Newsletter",
    description:
      "Newsletters from Cole Caccamise about growing a one person business.",
  },
};

export default function LettersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
