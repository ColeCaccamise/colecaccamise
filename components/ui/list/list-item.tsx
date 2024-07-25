import Link from 'next/link';
import Image from 'next/image';
import ListDescription from './list-description';

type AllowedKinds = 'drops' | 'letters' | 'stack' | 'ventures';

export default function ListItem({
	item,
	kind,
}: {
	item: any;
	kind: AllowedKinds;
}) {
	const url = item?.url || (item?.slug && `/${kind}/${item.slug}`) || '';

	const pattern = /^(?:[a-z]+:)?\/\//i;
	const isNonRelativePath = pattern.test(url);

	const className = `flex gap-4 items-center py-6 no-underline border-t border-b border-l border-r first:border-t-ui-component-default border-x-transparent border-y-ui-component-default  ${
		url
			? 'hover:bg-sidebar-bg hover:-mx-3 hover:px-3 transition-all duration-200 hover:border-x-ui-component-default hover:rounded-md'
			: 'select-none cursor-wait opacity-80'
	}`;

	return url ? (
		<Link
			href={url}
			target={isNonRelativePath ? '_blank' : ''}
			className={className}
		>
			{item.thumbnailImage && (
				<div className='w-16 h-16 overflow-hidden'>
					<Image
						className='rounded-lg object-cover h-full'
						src={item.thumbnailImage}
						alt={item.name || item.title}
						width={512}
						height={512}
					/>
				</div>
			)}
			<ListDescription
				item={item}
				kind={kind}
			/>
		</Link>
	) : (
		<span className={className}>
			{item.thumbnailImage && (
				<div className='w-16 h-16 overflow-hidden'>
					<Image
						className='rounded-lg object-cover h-full'
						src={item.thumbnailImage}
						alt={item.name || item.title}
						width={512}
						height={512}
					/>
				</div>
			)}
			<ListDescription
				item={item}
				kind={kind}
			/>
		</span>
	);
}
