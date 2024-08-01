export default function ListContainer({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="border-b border-ui-component-default pb-3">
        <span className="font-medium">{title}</span>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
