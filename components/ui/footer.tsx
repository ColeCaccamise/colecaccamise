import Link from 'next/link';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='flex justify-center mx-auto'>
			<span className='text-low-contrast-text text-sm'>
				&copy; {currentYear}{' '}
				<Link
					className='hover:opacity-90'
					href='https://caccamedia.com?utm_source=website&utm_medium=footer-link'
				>
					Caccamedia
				</Link>
			</span>
		</footer>
	);
}
