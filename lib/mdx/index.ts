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

		return { meta: { ...frontmatter, slug: realSlug }, content };
	} catch (error) {
		return notFound();
	}
};

export const getAllCollectionMeta = async (
	collection: string,
	limit?: number,
	exclude?: string
) => {
	try {
		const rootDirectory = path.join(
			process.cwd(),
			'app',
			'content',
			collection
		);

		const files = fs.readdirSync(rootDirectory);

		let items: Drop[] | Stack[] | Letter[] = getItemsArray(collection);

		const effectiveLimit = limit ?? files.length;
		let count = 0;

		for (let i = 0; i < files.length && count < effectiveLimit; i++) {
			const file = path.parse(files[i]).name;

			// Skip the file if it matches the exclude slug
			if (exclude && file === exclude) {
				continue;
			}

			const { meta }: { meta: Drop | Letter | Stack } =
				await getCollectionBySlug(`${file}`, collection);
			items.push(meta as any);

			count++;
		}

		return items;
	} catch (error) {
		return notFound();
	}
};
