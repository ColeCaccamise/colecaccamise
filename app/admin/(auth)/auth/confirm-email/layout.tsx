import { Suspense } from 'react';

export default function ConfirmEmailLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Suspense>{children}</Suspense>
		</>
	);
}
