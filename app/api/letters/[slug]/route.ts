import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const slug = params.slug;
    const filePath = path.join(
      process.cwd(),
      "content",
      "letters",
      `${slug}.mdx`,
    );

    try {
      const fileContent = await fs.readFile(filePath, "utf8");
      console.log(fileContent);
      return NextResponse.json({ content: fileContent }, { status: 200 });
    } catch (error) {
      console.error(`Error reading file ${slug}.mdx:`, error);
      return NextResponse.json({ error: "Letter not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error in GET /api/letters/[slug]:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
