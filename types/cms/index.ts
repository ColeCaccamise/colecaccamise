export type Params = { slug: string };

export type Meta = { slug: string; name?: string; title?: string };

export type Drop = {
  slug?: string;
  category?: string;
  seoDescription?: string;
  price?: number;
  oldPrice?: number;
  name?: string;
  lemonSqueezyLink?: string;
  demoLink?: string;
  thumbnailImage?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  position?: number;
  testimonial?: string;
  testimonialName?: string;
  testimonialUrl?: string;
  status?: "draft" | "published";
};

export type Letter = {
  slug?: string;
  title?: string;
  published?: string;
  description?: string;
  position?: number;
  status?: "draft" | "published";
};

export type Stack = {
  slug?: string;
  title?: string;
  description?: string;
  seoDescription?: string;
  position?: number;
  feedbackText?: string;
  feedbackPreview?: string;
  status?: "draft" | "published";
};
