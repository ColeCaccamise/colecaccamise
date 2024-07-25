import { getAllCollectionMeta } from '@/lib/mdx';
import Link from 'next/link';

export default async function StackPage() {
	const stack = await getAllCollectionMeta('stack');

	return (
		<>
			<h1>Stack</h1>
			{stack.map((item) => (
				<Link
					href={`/stack/${item.slug}`}
					key={item.slug}
				>
					<span>{item.title}</span>
				</Link>
			))}
		</>
	);
}
