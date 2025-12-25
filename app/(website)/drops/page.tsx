import { getAllCollectionMeta } from "@/lib/mdx";
import ListItem from "@/components/ui/list/list-item";
import { Drop } from "@/types/cms";
import Link from "next/link";

export default async function DropsPage() {
  const drops = await getAllCollectionMeta<Drop>("drops");

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium">Drops</h1>
        <p>Premium digital products I&apos;ve created.</p>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-medium">All drops</span>

        <div className="flex flex-col">
          {drops?.map((drop) => (
            <ListItem item={drop} kind="drops" key={drop.slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
