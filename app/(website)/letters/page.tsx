import { getAllCollectionMeta } from "@/lib/mdx";
import NewsletterSignup from "@/components/ui/newsletter-signup";
import ListItem from "@/components/ui/list/list-item";
import { Letter } from "@/types/cms";

export default async function LettersPage() {
  const letters = await getAllCollectionMeta<Letter>("letters");

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium leading-10">Letters</h1>
        {/* <NewsletterSignup formId="5584232" location="Letters" /> */}
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-medium">Past issues</span>

        <div className="flex flex-col">
          {letters.map((letter) => (
            <ListItem item={letter} kind="letters" key={letter.slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
