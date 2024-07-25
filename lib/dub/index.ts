import { Dub } from 'dub';
import { addTagParam, geoLocateLink, isAmazonUrl } from '@/lib/amazon';

const DUB_API_KEY = process.env.DUB_API_KEY || 'dub_df5RukKWblehKcYRw3qkvZhL';

const dub = new Dub({
	token: DUB_API_KEY,
});

type Link = { url: string; slug?: string; comments?: string };

export async function isSlugAvailable(slug: string): Promise<boolean> {
	try {
		const res = await dub.links.get({
			domain: 'coleca.cc',
			key: slug,
		});

		if (res) {
			return false;
		} else {
			return true;
		}
	} catch (error: any) {
		const dubError = error.error;

		if (dubError.code === 'not_found') {
			return true;
		} else {
			return false;
		}
	}
}

export async function createLink(
	url: string,
	slug?: string,
	comments?: string
) {
	if (!url) return null;

	await createLinks([{ url, slug, comments }]);
}

export async function createLinks(links: Link[]) {
	if (!links) return null;

	const linkPromises = links.map(async (link: Link) => {
		const geoLocatedLink = await geoLocateLink(link.url);

		const defaultUrl = isAmazonUrl(link.url) ? addTagParam(link.url) : link.url;

		return {
			url: defaultUrl,
			slug: link?.slug,
			comments: link?.comments,
			geo: geoLocatedLink || null,
		};
	});

	const preparedLinks: Link[] = await Promise.all(linkPromises);

	return await dub.links.createMany(preparedLinks);
}
