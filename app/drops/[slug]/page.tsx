import { getCollectionBySlug } from '@/lib/mdx';

const getPageContent = async (slug: string) => {
	const { meta, content } = await getCollectionBySlug(slug, 'drops');
	return { meta, content };
};

export async function generateMetadata({ params }) {
	const { meta } = await getPageContent(params.slug);
	return { title: meta.name };
}

const DropPage = async ({ params }) => {
	const { meta, content } = await getPageContent(params.slug);

	return (
		<section className='py-24'>
			<h2>{meta.name}</h2>
			<div className='container py-4 prose'>{content}</div>
		</section>
	);
};

export default DropPage;
