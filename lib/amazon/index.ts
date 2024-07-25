import axios from 'axios';
import * as cheerio from 'cheerio';

const AMAZON_AFFILIATE_TAG = process.env.AMAZON_AFFILIATE_TAG;

export function isAmazonUrl(url: string): boolean {
	const parsedUrl = new URL(url);

	return parsedUrl.hostname.includes('amazon.com');
}

export function addTagParam(
	url: string,
	tag: string = 'ccaccamise-20'
): string {
	try {
		// Create a URL object for easy manipulation
		const urlObj = new URL(url);

		// Check if the parameter already exists
		if (!urlObj.searchParams.has('tag')) {
			// Add the 'tag' parameter
			urlObj.searchParams.append('tag', tag);
		}

		// Return the modified URL as a string
		return urlObj.toString();
	} catch (error) {
		return url; // Return the original URL if there's an error
	}
}

export async function amazonUrl(
	countryTLD: string,
	amazonId: string,
	title: string
) {
	const url = `https://www.amazon.${countryTLD}/dp/${amazonId}?tag=${AMAZON_AFFILIATE_TAG}`;

	try {
		await axios.get(url); // check if the link is valid

		return url;
	} catch (error) {
		return encodeURI(
			`https://www.amazon.${countryTLD}/s?k=${title}&tag=${AMAZON_AFFILIATE_TAG}`
		);
	}
}

export async function geoLocateLink(url: string) {
	if (!url) return null;

	try {
		const parsedUrl = new URL(url);

		if (isAmazonUrl(url)) {
			const amazonId = parsedUrl.pathname.split('/')[2];

			const productTitle = await axios.get(
				`https://www.amazon.com/dp/${amazonId}`
			);

			const html = productTitle.data;
			const $ = cheerio.load(html);

			let title = $('title').text().trim();

			// Remove 'Amazon.com:' from the beginning of the title
			title = title.replace(/^Amazon\.com:\s*/, '');

			// Remove 'amazon.com' from anywhere else in the title
			title = title.replace(/\s*amazon\.com\s*/gi, '');

			// do work
			return {
				US: await amazonUrl('com', amazonId, title),
				GB: await amazonUrl('co.uk', amazonId, title),
				IT: await amazonUrl('it', amazonId, title),
				FR: await amazonUrl('fr', amazonId, title),
				ES: await amazonUrl('es', amazonId, title),
				CA: await amazonUrl('ca', amazonId, title),
				DE: await amazonUrl('de', amazonId, title),
			};
		} else {
			return null;
		}
	} catch (error) {
		throw new Error('Invalid URL');
	}
}
