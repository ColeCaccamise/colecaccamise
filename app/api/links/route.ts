import { createLinks } from '@/lib/dub';
import { LinkSchema } from 'dub/models/components';
import { isSlugAvailable } from '@/lib/dub';
import { type NextRequest } from 'next/server';

type Link = {
	url: string;
};

export async function POST(request: Request) {
	const res = await request.json();

	const links: Link[] = res.links;

	const generatedLinks: LinkSchema[] | null = await createLinks(links);

	return Response.json(generatedLinks);
}

export async function GET(request: NextRequest) {
	// const res = await request.json();

	const searchParams = request.nextUrl.searchParams;

	// get slug param
	const slug = searchParams.get('slug');

	if (!slug) {
		return Response.json(
			{ error: 'No slug provided' },
			{
				status: 400,
			}
		);
	}

	const slugAvailable: boolean = await isSlugAvailable(slug);

	return Response.json({ available: slugAvailable });

	// const slugAvailable = await isSlugAvailable(slug);

	// return Response.json({ slugAvailable });
}
