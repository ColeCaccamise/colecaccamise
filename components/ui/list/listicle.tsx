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
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        {collection.map((item: any, i: number) => (
          <ListItem key={i} item={item} kind={kind} />
        ))}
      </div>

      {valid && (
        <Link
          href={`/${kind}`}
          className="win2k-btn mt-1 inline-flex w-fit items-center gap-1 no-underline"
          style={{ color: "#000000", textDecoration: "none", fontSize: "0.75rem" }}
        >
          View all {kind}
          <ArrowRightIcon />
        </Link>
      )}
    </div>
  );
}
