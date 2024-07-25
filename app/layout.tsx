import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: '%s | Cole Caccamise',
		default: 'Cole Caccamise - Software Engineer & Web Designer',
	},
	description: 'Cole Caccamise is a software engineer, designer, and creator.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} dark:dark bg-app-bg text-high-contrast-text`}
			>
				<div className='max-w-3xl py-20 px-8 mx-auto flex flex-col gap-24'>
					{children}
				</div>

				{/* <GoogleAnalytics gaId='G-925P4MT7PB' /> */}
			</body>
		</html>
	);
}
