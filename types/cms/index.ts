export type Params = { slug: string };

export type Meta = { slug: string; name?: string; title?: string };

export type Drop = {
  slug?: string;
  category?: string;
  description?: string;
  seo_description?: string;
  price?: number;
  old_price?: number;
  name?: string;
  lemon_squeezy_link?: string;
  polar_link?: string;
  discount_code?: string;
  demo_link?: string;
  thumbnail_image?: string;
  image_1?: string;
  image_2?: string;
  image_3?: string;
  image_4?: string;
  image_5?: string;
  image_6?: string;
  position?: number;
  testimonial?: string;
  testimonial_name?: string;
  testimonial_url?: string;
  status?: "draft" | "published";
  published?: string;
  cta_text?: string;
  cta_sub_text?: string;
};

export type Letter = {
  slug?: string;
  /**
   * @deprecated Use `title` instead
   */
  name?: string;
  title?: string;
  published?: string;
  description?: string;
  position?: number;
  status?: "draft" | "published";
};

export type Stack = {
  slug?: string;
  name?: string;
  description?: string;
  seo_description?: string;
  position?: number;
  feedback_text?: string;
  feedback_preview?: string;
  status?: "draft" | "published";
  published?: string;
};

export type Job = {
  slug?: string;
  name?: string;
  description?: string;
  seo_description?: string;
  position?: number;
  status?: "draft" | "published";
  location?: string;
  type?: "full-time" | "part-time" | "contract";
  published?: string;
  open?: boolean;
};
