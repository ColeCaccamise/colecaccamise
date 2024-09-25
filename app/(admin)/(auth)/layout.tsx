export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className='max-w-md w-full'>{children}</div>
		</>
	);
}
