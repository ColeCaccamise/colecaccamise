import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack",
  description: "Products & Tools used by Cole Caccamise.",
  openGraph: {
    title: "Stack",
    description: "Products & Tools used by Cole Caccamise.",
  },
};

export default function LettersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
