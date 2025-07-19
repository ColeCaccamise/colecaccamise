import { getAllCollectionMeta } from "@/lib/mdx";
import ListItem from "@/components/ui/list/list-item";
import { Job } from "@/types/cms";

export default async function JobsPage() {
  const jobs = await getAllCollectionMeta<Job>("jobs");
  const openJobs = jobs.filter((job) => job.open === true);

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
          {openJobs.length > 0 ? (
            openJobs.map((job) => (
              <ListItem item={job} kind="jobs" key={job.slug} />
            ))
          ) : (
            <p className="text-sm leading-7 text-low-contrast-text">
              I don&apos;t have any open positions at the moment, but I&apos;m
              always happy to connect with talented people. Feel free to reach
              me at{" "}
              <a href="mailto:cole@colecaccamise.com">cole@colecaccamise.com</a>
              .
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
