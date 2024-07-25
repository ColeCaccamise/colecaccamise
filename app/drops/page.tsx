import { getAllCollectionMeta } from '@/lib/mdx';
import Link from 'next/link';

export default async function DropsPage() {
	const drops = await getAllCollectionMeta('drops');

	return (
		<>
			<h1>Drops</h1>
			{drops.map((drop) => (
				<Link
					href={`/drops/${drop.slug}`}
					key={drop.slug}
				>
					<span>{drop.name}</span>
				</Link>
			))}
		</>
	);
}
