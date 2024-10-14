import Link from "next/link";
import Image from "next/image";
import ListDescription from "./list-description";

type AllowedKinds = "drops" | "letters" | "stack" | "ventures";

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

  const className = `flex py-6 gap-4 items-center no-underline ${
    url
      ? "hover:bg-sidebar-bg transition-all duration-200 rounded-md hover:border-ui-component-default hover:px-3 hover:-mx-3"
      : "select-none cursor-wait opacity-80"
  }`;

  return url ? (
    <Link
      href={url}
      target={isNonRelativePath ? "_blank" : ""}
      className={className}
    >
      {item.thumbnail_image && (
        <div className="h-16 w-16 overflow-hidden">
          <Image
            className="h-full rounded-lg object-cover"
            src={item.thumbnail_image}
            alt={item.name || item.title}
            width={512}
            height={512}
          />
        </div>
      )}
      <ListDescription item={item} kind={kind} />
    </Link>
  ) : (
    <span className={className}>
      {item.thumbnail_image && (
        <div className="h-16 w-16 overflow-hidden">
          <Image
            className="h-full rounded-lg object-cover"
            src={item.thumbnail_image}
            alt={item.name || item.title}
            width={512}
            height={512}
          />
        </div>
      )}
      <ListDescription item={item} kind={kind} />
    </span>
  );
}
