import { NextResponse } from "next/server";
import { isValidEmail } from "@/lib/validation";
import { generateMagicLink } from "@/lib/auth";
import { sendLoginEmail } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    const validEmail = isValidEmail(email);

    if (!validEmail) {
      throw new Error("Please use a valid email address.");
    }

    if (email === "cole@colecaccamise.com") {
      try {
        const { url } = await generateMagicLink(email);

        await sendLoginEmail(email, url);
      } catch (error) {
        console.error("Error sending login email: ", error);

        return NextResponse.json(
          { message: "Something went wrong." },
          { status: 500 },
        );
      }
    }

    return NextResponse.json({ message: "Check your email." }, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
