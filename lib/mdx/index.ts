'use server';

import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import Video from '@/components/ui/video';
import { notFound } from 'next/navigation';

type Drop = {
	slug: string;
	category: string;
	seoDescription: string;
	price: number;
	oldPrice: number;
	name: string;
	lemonSqueezyLink: string;
	thumbnailImage: string;
};

const getItemsArray = (collection: string) => {
	if (collection === 'drops') {
		return [] as Drop[];
	} else {
		return [];
	}
};

// helpers
export const getCollectionBySlug = async (slug: string, collection: string) => {
	try {
		const realSlug = slug.replace(/\.mdx$/, '');

		const rootDirectory = path.join(
			process.cwd(),
			'app',
			'content',
			collection
		);

		const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

		const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

		const { frontmatter, content } = await compileMDX({
			source: fileContent,
			options: { parseFrontmatter: true },
			components: { Video },
		});

		console.log({ meta: { ...frontmatter, slug: realSlug }, content });

		return { meta: { ...frontmatter, slug: realSlug }, content };
	} catch (error) {
		return notFound();
	}
};

export const getAllCollectionMeta = async (collection: string) => {
	try {
		const rootDirectory = path.join(
			process.cwd(),
			'app',
			'content',
			collection
		);

		const files = fs.readdirSync(rootDirectory);

		let items = getItemsArray(collection);

		for (const file of files) {
			const { meta } = await getCollectionBySlug(`${file}`, collection);
			items.push(meta);
		}

		return items;
	} catch (error) {
		return notFound();
	}
};
