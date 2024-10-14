import { getCollectionBySlug, getAllCollectionMeta } from "@/lib/mdx";
import AspectRatio from "@/components/ui/aspect-ratio";

import { Params, Drop } from "@/types/cms";

import { StarFilledIcon } from "@radix-ui/react-icons";

import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Button from "@/components/ui/button";

import { capitalize } from "@/lib/string";
import BackLink from "@/components/ui/back-link";
import Listicle from "@/components/ui/list/listicle";

const getPageContent = async (slug: string) => {
  const { meta, content }: { meta: Drop; content: any } =
    await getCollectionBySlug(slug, "drops");
  return { meta, content };
};

export async function generateMetadata({ params }: { params: Params }) {
  const { meta }: { meta: Drop } = await getPageContent(params.slug);
  return {
    metadataBase: new URL("https://colecaccamise.com"),
    title: `${meta.name} | Cole Caccamise`,
    description: meta.seo_description,
    openGraph: {
      title: `${meta.name} | Cole Caccamise`,
      description: meta.seo_description,
      images: [
        {
          url: meta.thumbnail_image,
          width: 800,
          height: 600,
          alt: meta.name,
        },
      ],
    },
  };
}

const DropPage = async ({ params }: { params: Params }) => {
  const { meta, content }: { meta: Drop; content: any } = await getPageContent(
    params.slug,
  );

  const drops = await getAllCollectionMeta("drops", 3, meta.slug);

  const images = [
    meta.image_1,
    meta.image_2,
    meta.image_3,
    meta.image_4,
    meta.image_5,
    meta.image_6,
  ].filter((item) => item !== null);

  const buttonStyles =
    "bg-sidebar-bg w-12 h-12 rounded-md border border-borders-non-interactive flex items-center justify-center text-low-contrast-text hover:text-high-contrast-text hover:bg-ui-component-default hover:border-subtle-borders-interactive transition-effect";

  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-8">
        {images.length === 1 && (
          <AspectRatio
            className="rounded-2xl"
            src={meta?.image_1 || ""}
            alt={meta?.name || `Product image 1`}
            width={600}
            height={600}
          />
        )}

        {images.length > 1 && (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <AspectRatio
                    className="rounded-2xl"
                    src={image || ""}
                    alt={meta.name || `Product image ${index}`}
                    width={600}
                    height={600}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-4 flex">
              <CarouselPrevious variant="unstyled" className={buttonStyles}>
                {"< Previous"}
              </CarouselPrevious>
              <CarouselNext variant="unstyled" className={buttonStyles}>
                {"Next >"}
              </CarouselNext>
            </div>
          </Carousel>
        )}

        <div className="flex flex-col gap-4">
          <div>
            <div className="flex flex-col gap-3">
              <BackLink href="/drops">Back</BackLink>
              <h1 className="text-4xl font-medium">{meta.name}</h1>
              <span className="text-xl">
                ${meta.price}{" "}
                {meta.old_price && (
                  <span className="text-low-contrast-text line-through">
                    ${meta.old_price}
                  </span>
                )}
              </span>
              <span className="w-fit rounded-md bg-ui-component-default px-4 py-2">
                {capitalize(meta?.category || "")}
              </span>
            </div>

            <div className="container flex flex-col gap-4 py-4">{content}</div>
          </div>

          <div className="flex flex-col gap-4">
            <Link href={meta.lemon_squeezy_link || ""}>
              <Button className="w-full font-medium">Buy Now</Button>
            </Link>
            {meta?.demo_link && (
              <Link
                target="_blank"
                className="text-app-bg"
                href={meta.demo_link}
              >
                <Button
                  variant="unstyled"
                  className="btn btn-contrast w-full font-medium"
                >
                  Live Demo
                </Button>
              </Link>
            )}

            {meta.testimonial && meta.testimonial_name && (
              <div className="flex flex-col gap-2">
                <div className="flex text-warning">
                  <StarFilledIcon />
                  <StarFilledIcon />
                  <StarFilledIcon />
                  <StarFilledIcon />
                  <StarFilledIcon />
                </div>
                <p className="text-sm italic">
                  &quot;{meta.testimonial}&quot; - {meta.testimonial_name} via{" "}
                  <Link
                    target="_blank"
                    href={meta.testimonial_url || ""}
                    className="text-primary"
                  >
                    Senja
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-2xl font-medium">You may also like</span>
        <Listicle collection={drops} kind="drops" />
      </div>
    </div>
  );
};

export default DropPage;
