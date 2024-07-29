export type Params = { slug: string };

export type Meta = { slug: string; name?: string; title?: string };

export type Drop = {
	slug: string;
	category: string;
	seoDescription: string;
	price: number;
	oldPrice: number;
	name: string;
	lemonSqueezyLink: string;
	thumbnailImage: string;
};

export type Letter = {
	slug: string;
	title: string;
	published: string;
};

export type Stack = {
	slug: string;
	title: string;
	seoDescription: string;
};
