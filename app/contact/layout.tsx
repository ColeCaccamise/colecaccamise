import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact',
	description: 'Contact Cole Caccamise.',
};

export default function ContactLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
