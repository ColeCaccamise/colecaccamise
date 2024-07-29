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

	const valid = kind !== 'ventures' && collection.length > 0;

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-col transition-effect'>
				{collection.map((item: any, i: number) => (
					<ListItem
						key={i}
						item={item}
						kind={kind}
					/>
				))}
			</div>

			{valid && (
				<Link
					href={`/${kind}`}
					className='text-low-contrast-text flex items-center gap-1 hover:text-high-contrast-text group transition-all duration-300 ease-in-out'
				>
					View all
					<span className='transform transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-high-contrast-text'>
						<ArrowRightIcon />
					</span>
				</Link>
			)}
		</div>
	);
}
