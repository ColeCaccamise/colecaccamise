import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'The Letter',
	description:
		'Newsletters from Cole Caccamise about growing a one person business.',
};

export default function LettersLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
