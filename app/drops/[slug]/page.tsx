import { getCollectionBySlug } from '@/lib/mdx';

import { Meta, Params } from '@/types/cms';

const getPageContent = async (slug: string) => {
	const { meta, content } = await getCollectionBySlug(slug, 'drops');
	return { meta, content };
};

export async function generateMetadata({ params }: { params: Params }) {
	const { meta }: { meta: Meta } = await getPageContent(params.slug);
	return { title: `${meta.title} | Cole Caccamise` };
}

const DropPage = async ({ params }: { params: Params }) => {
	const { meta, content }: { meta: Meta; content: any } = await getPageContent(
		params.slug
	);

	return (
		<section className='py-24'>
			<h2>{meta.name}</h2>
			<div className='container py-4 prose'>{content}</div>
		</section>
	);
};

export default DropPage;
