import { YouTubeEmbed } from '@next/third-parties/google';

export default function Video({ url }: { url: string }) {
	console.log(url);
	if (url === undefined) {
		return null;
	}

	// return null if not youtube.com or youtu.be
	if (
		typeof url !== 'string' ||
		(!url.includes('youtube.com') && !url.includes('youtu.be'))
	) {
		return null;
	}

	const videoId = url.includes('youtu.be')
		? url.split('youtu.be/')[1]
		: url.split('v=')[1];

	return (
		<div className='rounded-md overflow-hidden'>
			<YouTubeEmbed
				videoid={videoId}
				params='web-share;'
			/>
		</div>
	);
}
