import { createLinks } from "@/lib/dub";
import { LinkSchema } from "dub/models/components";
import { isKeyAvailable } from "@/lib/dub";
import { type NextRequest } from "next/server";

export async function POST(request: Request) {
  const links = await request.json();

  const generatedLinks: LinkSchema[] | null = await createLinks(links);

  return Response.json(generatedLinks);
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // get slug param
  const key = searchParams.get("slug");

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
}
