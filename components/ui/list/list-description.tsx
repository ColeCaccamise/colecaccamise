import { formatDate } from "@/lib/string";
import { ArrowTopRightIcon, DotFilledIcon } from "@radix-ui/react-icons";

type AllowedKinds = "drops" | "letters" | "stack" | "ventures" | "jobs";

export default function ListDescription({
  item,
  kind,
}: {
  item: any;
  kind: AllowedKinds;
}) {
  if (!item || !kind) return null;

  const url = item?.url || (item?.slug && `/${kind}/${item.slug}`) || "";

  const pattern = /^(?:[a-z]+:)?\/\//i;
  const isNonRelativePath = pattern.test(url);

  if (kind === "drops") {
    return (
      <div className="flex flex-col">
        <span>{item.name}</span>
        <span className="font-regular flex items-center gap-1 text-low-contrast-text">
          {item.category.charAt(0).toUpperCase()}
          {item.category.slice(1)} <DotFilledIcon width={10} /> ${item.price}
        </span>
      </div>
    );
  } else if (kind === "letters") {
    return (
      <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <span>{item.title || item.name}</span>
        <span className="font-regular whitespace-nowrap text-sm text-low-contrast-text">
          {formatDate(item.published)}
        </span>
      </div>
    );
  } else if (kind === "stack") {
    return (
      <div className="flex flex-col">
        <span>{item.name}</span>
        <span className="font-regular text-low-contrast-text">
          {item.description}
        </span>
      </div>
    );
  } else if (kind === "ventures") {
    return (
      <div className="flex flex-col gap-1">
        <span className="flex items-center gap-1">
          {item.name} {isNonRelativePath ? <ArrowTopRightIcon /> : ""}
        </span>
        <span className="font-regular text-low-contrast-text">
          {item.description}
        </span>
      </div>
    );
  } else if (kind === "jobs") {
    return (
      <div className="flex w-full flex-col items-start justify-between gap-1 md:flex-row md:items-center">
        <span>{item.name}</span>
        <span className="font-regular text-sm text-low-contrast-text">
          {item.location}
        </span>
      </div>
    );
  }
}
