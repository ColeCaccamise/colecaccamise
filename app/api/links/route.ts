import { createLinks } from "@/lib/dub";
import { LinkSchema } from "dub/models/components";
import { isKeyAvailable } from "@/lib/dub";
import { type NextRequest } from "next/server";

export async function POST(request: Request) {
  const links = await request.json();

  console.log("links", links);

  const generatedLinks: LinkSchema[] | null = await createLinks(links);

  return Response.json(generatedLinks);
}

export async function GET(request: NextRequest) {
  //   const res = await request.json();

  const searchParams = request.nextUrl.searchParams;

  // get slug param
  const key = searchParams.get("key");

  if (!key) {
    return Response.json(
      { error: "No slug provided" },
      {
        status: 400,
      },
    );
  }

  const keyAvailable: boolean = await isKeyAvailable(key);

  return Response.json({ available: keyAvailable });

  // const slugAvailable = await isSlugAvailable(slug);

  // return Response.json({ slugAvailable });
}
