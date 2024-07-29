import Link from 'next/link';

export default function SidebarLink({
	href,
	active = false,
	children,
}: {
	href: string;
	active: boolean;
	children: React.ReactNode;
}) {
	return (
		<Link
			className={`py-1 flex items-center gap-2 hover:text-high-contrast-text ${
				active ? 'text-high-contrast-text' : 'text-low-contrast-text'
			}`}
			href={href}
		>
			{children}
		</Link>
	);
}
