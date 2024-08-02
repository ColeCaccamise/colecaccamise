import { getCollectionBySlug, getAllCollectionMeta } from "@/lib/mdx";
import BackLink from "@/components/ui/back-link";

import { Stack, Params } from "@/types/cms";
import Listicle from "@/components/ui/list/listicle";
import Input from "@/components/ui/input";
import Feedback from "@/components/ui/feedback";

import sendEmail from "@/app/api/send/send";

const getPageContent = async (slug: string) => {
  const { meta, content }: { meta: Stack; content: any } =
    await getCollectionBySlug(slug, "stack");
  return { meta, content };
};

export async function generateMetadata({ params }: { params: Params }) {
  const { meta }: { meta: Stack } = await getPageContent(params.slug);
  return {
    title: `${meta.title} | Cole Caccamise`,
    description: meta.seoDescription,
  };
}

async function sendFeedback(email: string, feedback: string, stack: string) {
  "use server";

  const { data, error } = await sendEmail(
    email,
    `New Feedback from ${stack}`,
    <>
      <h1>New feedback from {stack}</h1>
      <p>Email: {email}</p>
      <p>Feedback: {feedback}</p>
    </>,
  );

  if (error) {
    throw new Error("Oops, something went wrong. Can you try again?");
  }
}

const Page = async ({ params }: { params: Params }) => {
  const { meta, content }: { meta: Stack; content: any } = await getPageContent(
    params.slug,
  );

  const stack = await getAllCollectionMeta("stack", 3, params.slug);

  return (
    <div className="flex flex-col gap-8">
      <BackLink href="/stack">Back</BackLink>
      <div className="flex flex-col gap-4 border-b border-ui-component-default pb-8">
        <h1 className="text-4xl font-medium">{meta.title}</h1>
        <span className="text-low-contrast-text">{meta.description}</span>
        <span className="text-sm">
          Note: I may earn a commission from some links (thank you for
          supporting me).
        </span>
      </div>
      <div className="container flex flex-col gap-6 py-4">{content}</div>

      <Feedback
        stack={meta.title}
        feedbackText={meta.feedbackText}
        feedbackPreview={meta.feedbackPreview}
        handleSendFeedback={sendFeedback}
      />

      {stack.length > 0 && (
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-medium">You may also like</span>
          <Listicle collection={stack} kind="stack" />
        </div>
      )}
    </div>
  );
};

export default Page;
