import { getCollectionBySlug, getAllCollectionMeta } from "@/lib/mdx";
import NewsletterSignup from "@/components/ui/newsletter-signup";
import BackLink from "@/components/ui/back-link";
import axios from "axios";
import { Letter, Params } from "@/types/cms";
import { formatDate, formatTimeAgo } from "@/lib/string";
import Listicle from "@/components/ui/list/listicle";
import CopyLinkButton from "./copy-link-button";

const getPageContent = async (slug: string) => {
  "use server";

  const { meta, content } = await getCollectionBySlug(slug, "letters");

  return { meta, content };
};

const fetchLetter = async (slug: string) => {
  "use server";

  try {
    const res = await axios.get(`http://localhost:3000/api/letters/${slug}`);

    const data = await res.data;

    return data;
  } catch (error) {
    return null;
  }
};

export async function generateMetadata({ params }: { params: Params }) {
  const { meta }: { meta: Letter } = await getPageContent(params.slug);
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
  const { meta, content }: { meta: Letter; content: any } =
    await getPageContent(params.slug);

  const letter = await fetchLetter(params.slug);

  const letters = await getAllCollectionMeta("letters", 3, meta.slug);

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <BackLink href="/letters">Back</BackLink>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl">{meta.name}</h1>
            </div>
            <span className="text-low-contrast-text">{meta.description}</span>
          </div>
          <span className="text-sm text-low-contrast-text">
            {formatDate(meta.published || "")} (
            {formatTimeAgo(meta.published || "")})
          </span>
        </div>

        <div className="letter-content flex flex-col gap-6">{content}</div>

        <CopyLinkButton />
      </div>

      <div>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-2xl font-medium">
              Not already a subscriber?
            </span>
            <p>
              Sign up to receive more insights on building digital products.
            </p>
          </div>
          <NewsletterSignup formId="5584232" location="Letters" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-2xl font-medium">You may also like</span>
        <Listicle collection={letters} kind="letters" />
      </div>
    </div>
  );
};

export default Page;
