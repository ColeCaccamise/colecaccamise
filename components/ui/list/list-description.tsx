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

  const nameStyle = { color: "#000080", fontSize: "0.8125rem" };
  const descStyle = { color: "#444444", fontSize: "0.75rem" };

  if (kind === "drops") {
    return (
      <div className="flex flex-col">
        <span style={nameStyle}>{item.name}</span>
        <span className="flex items-center gap-1" style={descStyle}>
          {item.category.charAt(0).toUpperCase()}
          {item.category.slice(1)} <DotFilledIcon width={10} /> ${item.price}
        </span>
      </div>
    );
  } else if (kind === "letters") {
    return (
      <div className="flex w-full flex-col items-start justify-between gap-1 md:flex-row md:items-center">
        <span style={nameStyle}>{item.title || item.name}</span>
        <span className="whitespace-nowrap" style={descStyle}>
          {formatDate(item.published)}
        </span>
      </div>
    );
  } else if (kind === "stack") {
    return (
      <div className="flex flex-col">
        <span style={nameStyle}>{item.name}</span>
        <span style={descStyle}>{item.description}</span>
      </div>
    );
  } else if (kind === "ventures") {
    return (
      <div className="flex flex-col gap-0.5">
        <span className="flex items-center gap-1" style={nameStyle}>
          {item.name} {isNonRelativePath ? <ArrowTopRightIcon /> : ""}
        </span>
        <span style={descStyle}>{item.description}</span>
      </div>
    );
  } else if (kind === "jobs") {
    return (
      <div className="flex w-full flex-col items-start justify-between gap-1 md:flex-row md:items-center">
        <span style={nameStyle}>{item.name}</span>
        <span style={descStyle}>{item.location}</span>
      </div>
    );
  }
}
