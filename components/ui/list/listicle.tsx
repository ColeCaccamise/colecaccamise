import { ArrowRightIcon } from '@radix-ui/react-icons';
import ListItem from './list-item';
import Link from 'next/link';

type AllowedKinds = 'drops' | 'letters' | 'stack' | 'ventures';

export default function Listicle({
	collection,
	kind,
}: {
	collection: any;
	kind: AllowedKinds;
}) {
	if (!collection || !kind) return null;

	return (
		<>
			<div>
				{collection.map((item: any, i: number) => (
					<ListItem
						key={i}
						item={item}
						kind={kind}
					/>
				))}
			</div>
			{kind !== 'ventures' && (
				<Link
					href={`/${kind}`}
					className='text-low-contrast-text flex items-center gap-2'
				>
					View all <ArrowRightIcon />
				</Link>
			)}
		</>
	);
}
