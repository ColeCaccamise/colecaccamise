import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function LinkPageItem({
  title,
  description,
  url,
  icon,
  cta,
}: {
  title: string;
  description: string;
  url: string;
  icon: any;
  cta: string;
}) {
  return (
    <div className="flex w-full items-center justify-between gap-2 rounded-md border-2 border-ui-component-default bg-sidebar-bg px-6 py-4">
      <div className="flex items-center gap-6">
        <span className="text-low-contrast-text">
          <FontAwesomeIcon icon={icon} width={28} height={28} />
        </span>

        <div className="flex flex-col">
          <span>{title}</span>
          <span className="text-sm text-low-contrast-text">{description}</span>
        </div>
      </div>

      <Link
        className="flex items-center rounded-md border border-borders-non-interactive bg-ui-component-default px-6 py-2"
        href={url}
      >
        <span>{cta}</span>
      </Link>
    </div>
  );
}
