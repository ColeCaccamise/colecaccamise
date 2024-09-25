import { NextRequest, NextResponse } from "next/server";

import { sendEmail } from "@/lib/resend";
import FinanceVideoEmail from "./email";

export async function GET(request: NextRequest) {
  try {
    await sendEmail(
      "cole@colecaccamise.com",
      "Finance Video",
      FinanceVideoEmail(),
    );

    return NextResponse.json({ message: "Email sent." }, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/cron/finance-video:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
