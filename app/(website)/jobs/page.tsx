import { getAllCollectionMeta } from "@/lib/mdx";
import NewsletterSignup from "@/components/ui/newsletter-signup";
import ListItem from "@/components/ui/list/list-item";

export default async function JobsPage() {
  const jobs = await getAllCollectionMeta("jobs");

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium">Join the team</h1>
        <p>
          If you&apos;re passionate about building great products and creating
          content, I&apos;d love to hear from you.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-medium">Open positions</span>

        <div className="flex flex-col">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <ListItem item={job} kind="jobs" key={job.slug} />
            ))
          ) : (
            <p>No open positions at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
}
