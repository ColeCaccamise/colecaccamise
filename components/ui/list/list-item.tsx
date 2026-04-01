import Link from "next/link";
import Image from "next/image";
import ListDescription from "./list-description";

type AllowedKinds = "drops" | "letters" | "stack" | "ventures" | "jobs";

export default function ListItem({
  item,
  kind,
}: {
  item: any;
  kind: AllowedKinds;
}) {
  const url = item?.url || (item?.slug && `/${kind}/${item.slug}`) || "";

  const pattern = /^(?:[a-z]+:)?\/\//i;
  const isNonRelativePath = pattern.test(url);

  const className = `flex py-3 gap-3 items-center no-underline border-b ${
    url
      ? "hover:bg-[#b8d4e8] cursor-pointer"
      : "select-none cursor-wait opacity-80"
  }`;

  return url ? (
    <Link
      href={url}
      target={isNonRelativePath ? "_blank" : ""}
      className={className}
      prefetch={true}
      style={{ borderBottom: "1px dotted #c0c0c0", textDecoration: "none" }}
    >
      {item.thumbnail_image && (
        <div className="h-10 w-10 overflow-hidden flex-shrink-0">
          <Image
            className="h-full w-full object-cover"
            src={item.thumbnail_image}
            alt={item.title || item.name}
            width={512}
            height={512}
            style={{ border: "2px inset #808080" }}
          />
        </div>
      )}
      <ListDescription item={item} kind={kind} />
    </Link>
  ) : (
    <span className={className} style={{ borderBottom: "1px dotted #c0c0c0" }}>
      {item.thumbnail_image && (
        <div className="h-10 w-10 overflow-hidden flex-shrink-0">
          <Image
            className="h-full w-full object-cover"
            src={item.thumbnail_image}
            alt={item.title || item.name}
            width={512}
            height={512}
            style={{ border: "2px inset #808080" }}
          />
        </div>
      )}
      <ListDescription item={item} kind={kind} />
    </span>
  );
}

