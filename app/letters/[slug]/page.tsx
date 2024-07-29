import { getCollectionBySlug, getAllCollectionMeta } from '@/lib/mdx';
import Avatar from '@/components/ui/avatar';
import NewsletterSignup from '@/components/ui/newsletter-signup';
import BackLink from '@/components/ui/back-link';

import { Letter, Params } from '@/types/cms';
import { formatDate } from '@/lib/string';
import Listicle from '@/components/ui/list/listicle';

const getPageContent = async (slug: string) => {
	const { meta, content } = await getCollectionBySlug(slug, 'letters');
	return { meta, content };
};

export async function generateMetadata({ params }: { params: Params }) {
	const { meta }: { meta: Letter } = await getPageContent(params.slug);
	return {
		title: `${meta.title} | Cole Caccamise`,
		description: meta.description,
	};
}

const Page = async ({ params }: { params: Params }) => {
	const { meta, content }: { meta: Letter; content: any } =
		await getPageContent(params.slug);

	const letters = await getAllCollectionMeta('letters', 3, meta.slug);

	return (
		<div className='flex flex-col gap-16'>
			<div className='flex flex-col gap-8'>
				<BackLink href='/letters'>Back</BackLink>
				<div className='flex flex-col gap-4 border-b border-ui-component-default pb-8'>
					<h1 className='text-4xl font-medium'>{meta.title}</h1>
					<span className='text-low-contrast-text'>{meta.description}</span>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-2'>
							<Avatar
								width={36}
								height={36}
							/>
							<span>by Cole Caccamise</span>
						</div>

						<span className='text-low-contrast-text'>
							{formatDate(meta.published)}
						</span>
					</div>
				</div>

				<div className='py-4 flex flex-col gap-6'>{content}</div>
			</div>

			<div>
				<div className='flex flex-col gap-4'>
					<div>
						<span className='text-2xl font-medium'>
							Not already a subscriber?
						</span>
						<p>
							Sign up to receive more insights on running a one-person business.
						</p>
					</div>
					<NewsletterSignup
						formId='5584232'
						location='Letters'
						// title='Not already a subscriber?'
						// description='Sign up to receive more insights on running a one-person business.'
					/>
				</div>
			</div>

			<div className='flex flex-col gap-2'>
				<span className='text-2xl font-medium'>You may also like</span>
				<Listicle
					collection={letters}
					kind='letters'
				/>
			</div>
		</div>
	);
};

export default Page;
