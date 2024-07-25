import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Drops',
	description: 'Digital products designed by Cole Caccamise.',
};

export default function DropsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
