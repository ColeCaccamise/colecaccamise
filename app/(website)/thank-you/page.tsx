import Link from "next/link";

export default function ThankYouPage() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium">You&apos;re f*cking awesome.</h1>
        <p>
          I appreciate you coming on this journey with me. My goal is to provide
          as much value as I can to aspiring and current entrepreneurs.
        </p>
        <p>
          I’ve made mistakes in the past and I have a lot more to make in the
          future. I’m excited to share those with you.
        </p>
        <p>
          I send out one email a week on Sunday, but in the meantime, you can
          read all the past issues <Link href="/letters">here</Link>. Talk again
          soon
        </p>
        <p>Cole</p>
      </div>
    </>
  );
}
