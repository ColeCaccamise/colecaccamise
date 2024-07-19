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
		<iframe
			width='560'
			height='315'
			src={`https://www.youtube.com/embed/${videoId}`}
			title='YouTube video player'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
			referrerPolicy='strict-origin-when-cross-origin'
			allowFullScreen
		/>
	);
}
