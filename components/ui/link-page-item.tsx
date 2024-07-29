import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function LinkPageItem({
	title,
	description,
	url,
	icon,
	cta,
}: {
	title: string;
	description: string;
	url: string;
	icon: any;
	cta: string;
}) {
	return (
		<div className='bg-sidebar-bg border-2 border-ui-component-default rounded-md px-6 py-4 flex justify-between w-full'>
			<div className='flex gap-6 items-center'>
				<span className='text-low-contrast-text'>
					<FontAwesomeIcon
						icon={icon}
						width={28}
						height={28}
					/>
				</span>

				<div className='flex flex-col'>
					<span>{title}</span>
					<span className='text-low-contrast-text'>{description}</span>
				</div>
			</div>

			<Link
				className='flex items-center border bg-ui-component-default border-borders-non-interactive rounded-md py-2 px-6'
				href={url}
			>
				<span>{cta}</span>
			</Link>
		</div>
	);
}
