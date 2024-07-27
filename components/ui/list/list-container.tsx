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
		<div className='flex flex-col gap-4'>
			<div>
				<span>{title}</span>
				<p>{description}</p>
			</div>
			{children}
		</div>
	);
}
