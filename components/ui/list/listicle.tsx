import { ArrowRightIcon } from "@radix-ui/react-icons";
import ListItem from "./list-item";
import Link from "next/link";

type AllowedKinds = "drops" | "letters" | "stack" | "ventures";

export default function Listicle({
  collection,
  kind,
}: {
  collection: any;
  kind: AllowedKinds;
}) {
  if (!collection || !kind) return null;

  const valid = kind !== "ventures" && collection.length > 0;

  return (
    <div className="flex flex-col gap-4">
      <div className="transition-effect flex flex-col">
        {collection.map((item: any, i: number) => (
          <ListItem key={i} item={item} kind={kind} />
        ))}
      </div>

      {valid && (
        <Link
          href={`/${kind}`}
          className="group flex items-center gap-1 text-low-contrast-text transition-all duration-300 ease-in-out hover:text-high-contrast-text"
        >
          View all
          <span className="transition-transform group-hover:translate-x-1">
            <ArrowRightIcon />
          </span>{" "}
        </Link>
      )}
    </div>
  );
}
