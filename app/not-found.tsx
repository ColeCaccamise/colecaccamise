import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col gap-4">
      <h1>Yikes, that&apos;s a 404.</h1>
      <p>
        This is embarassing, but I couldn&apos;t find what you&apos;re looking
        for.
      </p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
