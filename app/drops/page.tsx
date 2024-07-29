import { getAllCollectionMeta } from '@/lib/mdx';
import ListItem from '@/components/ui/list/list-item';
import NewsletterSignup from '@/components/ui/newsletter-signup';
import Link from 'next/link';

export default async function DropsPage() {
	const drops = await getAllCollectionMeta('drops');

	return (
		<div className='flex flex-col gap-16'>
			<div className='flex flex-col gap-4'>
				<h1 className='text-3xl font-medium'>Drops</h1>
				<p>Premium digital products I&apos;ve created.</p>
				{/* <NewsletterSignup
					cta='Get 20% Off'
					formId='5584232'
				/> */}
			</div>

			<div className='flex flex-col gap-4'>
				<span className='font-medium'>All drops</span>

				<div className='flex flex-col'>
					{drops.map((drop) => (
						<ListItem
							item={drop}
							kind='drops'
							key={drop.slug}
						/>
					))}
				</div>
			</div>

			<span className='text-sm text-low-contrast-text'>
				Have an audience who&apos;d love my products?{' '}
				<Link
					href='https://colecaccamise.lemonsqueezy.com/affiliates'
					className='hover:opacity-90'
				>
					Become an affiliate
				</Link>
				.
			</span>
		</div>
	);
}
