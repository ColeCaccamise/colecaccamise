import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';
import Video from '@/components/ui/video';

export default async function RemoteMdxPage({
	params,
}: {
	params: { slug: string };
}) {
	// Construct the file path
	const filePath = path.join(
		process.cwd(),
		'cms',
		'letters',
		`${params.slug}.mdx`
	);

	// Read the file content
	const markdown = fs.readFileSync(filePath, 'utf8');

	return (
		<MDXRemote
			components={{ Video }}
			source={markdown}
		/>
	);
}
