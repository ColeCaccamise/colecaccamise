import { getCollectionBySlug } from '@/lib/mdx';

const getPageContent = async (slug: string) => {
	const { meta, content } = await getCollectionBySlug(slug, 'letters');
	return { meta, content };
};

export async function generateMetadata({ params }) {
	const { meta } = await getPageContent(params.slug);
	return { title: meta.title };
}

const Page = async ({ params }) => {
	const { content } = await getPageContent(params.slug);

	return (
		<section className='py-24'>
			<div className='container py-4 prose'>{content}</div>
		</section>
	);
};

export default Page;
