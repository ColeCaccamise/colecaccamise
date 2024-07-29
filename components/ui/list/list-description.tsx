import { formatDate } from '@/lib/string';
import { ArrowTopRightIcon, DotFilledIcon } from '@radix-ui/react-icons';

type AllowedKinds = 'drops' | 'letters' | 'stack' | 'ventures';

export default function ListDescription({
	item,
	kind,
}: {
	item: any;
	kind: AllowedKinds;
}) {
	if (!item || !kind) return null;

	const url = item?.url || (item?.slug && `/${kind}/${item.slug}`) || '';

	const pattern = /^(?:[a-z]+:)?\/\//i;
	const isNonRelativePath = pattern.test(url);

	if (kind === 'drops') {
		return (
			<div className='flex flex-col'>
				<span>{item.name}</span>
				<span className='flex gap-1 items-center text-low-contrast-text font-regular'>
					{item.category.charAt(0).toUpperCase()}
					{item.category.slice(1)} <DotFilledIcon width={10} /> ${item.price}
				</span>
			</div>
		);
	} else if (kind === 'letters') {
		return (
			<div className='w-full flex justify-between'>
				<span>{item.title}</span>
				<span className='text-low-contrast-text font-regular text-sm'>
					{formatDate(item.published)}
				</span>
			</div>
		);
	} else if (kind === 'stack') {
		return (
			<div className='flex flex-col'>
				<span>{item.title}</span>
				<span className='text-low-contrast-text font-regular'>
					{item.description}
				</span>
			</div>
		);
	} else if (kind === 'ventures') {
		return (
			<div className='flex flex-col'>
				<span className='flex items-center gap-1'>
					{item.name} {isNonRelativePath ? <ArrowTopRightIcon /> : ''}
				</span>
				<span className='text-low-contrast-text font-regular'>
					{item.description}
				</span>
			</div>
		);
	}
}
