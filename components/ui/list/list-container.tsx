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
			<div className='pb-3 border-b border-ui-component-default'>
				<span className='font-medium'>{title}</span>
				<p>{description}</p>
			</div>
			{children}
		</div>
	);
}
