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
    <div className="flex flex-col gap-4">
      <div className="pb-1">
        <span className="font-medium">{title}</span>
        {description && <p>{description}</p>}
      </div>
      {children}
    </div>
  );
}
