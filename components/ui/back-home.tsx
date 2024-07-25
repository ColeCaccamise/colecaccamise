import Link from 'next/link';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export default function BackHome() {
	return (
		<Link
			href='/'
			className='flex items-center group gap-1 no-underline'
		>
			<span className='group-hover:-translate-x-1 transition-effect'>
				<ArrowLeftIcon />
			</span>{' '}
			Home
		</Link>
	);
}
