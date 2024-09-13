import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deadlock Invites",
  description: "Get an invite to Deadlock, a new MOBA from Valve.",
};

export default function DeadlockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
