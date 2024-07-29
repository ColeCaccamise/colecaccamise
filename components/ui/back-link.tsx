import Link from 'next/link';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export default function BackLink({
	className = '',
	children = 'Home',
	href = '/',
}: {
	className?: string;
	children?: React.ReactNode;
	href?: string;
}) {
	return (
		<Link
			href={href}
			className={`flex items-center group gap-1 no-underline text-low-contrast-text hover:text-high-contrast-text ${className}`}
		>
			<span className='group-hover:-translate-x-1 transition-transform'>
				<ArrowLeftIcon />
			</span>{' '}
			{children}
		</Link>
	);
}
