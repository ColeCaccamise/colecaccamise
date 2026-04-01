export default function ListContainer({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      {title && (
        <div className="pb-1">
          <span className="font-bold text-sm" style={{ color: "#000080" }}>{title}</span>
          {description && <p className="text-xs" style={{ color: "#444444" }}>{description}</p>}
        </div>
      )}
      {children}
    </div>
  );
}

