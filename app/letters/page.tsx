import Link from 'next/link';
import { getAllCollectionMeta } from '@/lib/mdx';

export default async function LettersPage() {
	const letters = await getAllCollectionMeta('letters');

	return (
		<>
			<h1>Hello</h1>
			{letters.map((letter) => (
				<Link
					href={`/letters/${letter.slug}`}
					key={letter.slug}
				>
					<h2>{letter.title}</h2>
					<p>{letter.date}</p>
				</Link>
			))}
		</>
	);
}
