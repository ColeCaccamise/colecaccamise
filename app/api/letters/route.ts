import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { metadata, filename, content } = body;

    const filePath = path.join(
      process.cwd(),
      "content",
      "letters",
      `${filename}.mdx`,
    );

    try {
      const { title, description, published } = metadata;

      const fileContent =
        `---\ntitle: ${title}\ndescription: ${description}\npublished: ${published}\nstatus: draft\n---\n\n` +
        content;

      await fs.writeFile(filePath, fileContent);
    } catch (error) {
      console.error("Error in POST /api/letters:", error);

      return NextResponse.json(
        { error: "Failed to create file" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        message: "Letter created successfully",
        url: `${process.env.APP_URL}/letters/${filename}`,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error in POST /api/letters:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
