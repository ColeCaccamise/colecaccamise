import { getCollectionBySlug } from "@/lib/mdx";
import BackLink from "@/components/ui/back-link";
import { Params } from "@/types/cms";

const getPageContent = async (slug: string) => {
  "use server";

  const { meta, content } = await getCollectionBySlug(slug, "jobs");

  return { meta, content };
};

export async function generateMetadata({ params }: { params: Params }) {
  const { meta } = await getPageContent(params.slug);
  return {
    metadataBase: new URL("https://colecaccamise.com"),
    title: `${meta.name} | Cole Caccamise`,
    description: meta.description,
    openGraph: {
      title: `${meta.name} | Cole Caccamise`,
      description: meta.description,
    },
  };
}

const Page = async ({ params }: { params: Params }) => {
  const { meta, content } = await getPageContent(params.slug);

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <BackLink href="/jobs">Back</BackLink>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl">{meta.name}</h1>
          </div>
          <span className="text-low-contrast-text">{meta.description}</span>
        </div>

        <div className="job-content flex flex-col gap-6">{content}</div>
      </div>
    </div>
  );
};

export default Page;
