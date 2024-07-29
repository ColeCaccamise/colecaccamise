'use server';

import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import Video from '@/components/ui/video';
import { notFound } from 'next/navigation';
import { Drop, Letter, Stack } from '@/types/cms';

type Frontmatter = Drop | Letter | Stack;

const getItemsArray = (collection: string) => {
	if (collection === 'drops') {
		return [] as Drop[];
	} else if (collection === 'letters') {
		return [] as Letter[];
	} else if (collection === 'stack') {
		return [] as Stack[];
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

		const { frontmatter, content }: { frontmatter: Frontmatter; content: any } =
			await compileMDX({
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

		let items: Drop[] | Stack[] | Letter[] = getItemsArray(collection);

		for (const file of files) {
			const { meta }: { meta: Drop | Letter | Stack } =
				await getCollectionBySlug(`${file}`, collection);
			items.push(meta as any);
		}

		return items;
	} catch (error) {
		return notFound();
	}
};
