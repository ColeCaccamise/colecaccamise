import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
// import { GoogleAnalytics } from '@next/third-parties/google';
import PlausibleProvider from 'next-plausible';
import { Inter } from 'next/font/google';
import './globals.css';
import '@/app/styles/btn.css';
import { Toaster } from 'sonner';
import Sidebar from '@/components/ui/sidebar';
import NavigationMenu from '@/components/ui/navigation-menu';
import Footer from '@/components/ui/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: '%s | Cole Caccamise',
		default: 'Cole Caccamise - Solopreneur, Software Engineer, & Designer',
	},
	description: 'Cole Caccamise is a software engineer, designer, and creator.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const menuLinks = [
		{
			href: '/',
			name: 'Home',
		},
		{
			href: '/letters',
			name: 'Letters',
		},
		{
			href: '/drops',
			name: 'Drops',
		},
		{
			href: '/stack',
			name: 'Stack',
		},
		{
			href: '/links',
			name: 'Links',
		},
		{
			href: '/contact',
			name: 'Contact',
		},
	];

	return (
		<html lang='en'>
			<body
				className={`${inter.className} dark:dark bg-app-bg text-high-contrast-text overflow-x-hidden`}
			>
				<Toaster
					toastOptions={{
						duration: 4000,
						className: 'select-none',
					}}
				/>
				<PlausibleProvider
					domain='colecaccamise.vercel.app'
					trackOutboundLinks={true}
					taggedEvents={true}
				>
					<NavigationMenu menuLinks={menuLinks} />
					<div className='flex max-w-4xl w-full min-h-screen gap-12 px-8 mx-auto'>
						<Sidebar menuLinks={menuLinks} />

						<div className='flex flex-col gap-16 md:gap-24 w-full h-min overflow-visible py-20'>
							<div>{children}</div>

							<Footer />
						</div>
					</div>
				</PlausibleProvider>

				{/* <GoogleAnalytics gaId='G-925P4MT7PB' /> */}
			</body>
		</html>
	);
}
