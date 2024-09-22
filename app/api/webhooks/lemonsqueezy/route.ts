import crypto from "crypto";
import { NextRequest } from "next/server";

const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

type EventName = "order_created";

type Payload = {
  meta: {
    test_mode: boolean;
    event_name: EventName;
    webhook_id: string;
  };
  data: any;
};

export const POST = async (request: NextRequest) => {
  try {
    const text = await request.text();
    const hmac = crypto.createHmac(
      "sha256",
      process.env["LEMON_SQUEEZY_SECRET"] || "",
    );
    const digest = Buffer.from(hmac.update(text).digest("hex"), "utf8");
    const signature = Buffer.from(
      request.headers.get("x-signature") as string,
      "utf8",
    );

    console.log("digest", digest);
    console.log("signature", signature);

    if (!crypto.timingSafeEqual(digest, signature)) {
      console.log("Invalid signature.");
      console.log(signature);
      console.log(JSON.parse(text));
      return new Response("Invalid signature.", {
        status: 400,
      });
    }

    const payload = JSON.parse(text);

    const {
      meta: { event_name: eventName },
      data,
    } = payload as Payload;

    switch (eventName) {
      case "order_created":
        console.log("order_created", data);
        break;
      default:
        throw new Error(`🤷‍♀️ Unhandled event: ${eventName}`);
    }
  } catch (error: unknown) {
    if (isError(error)) {
      return new Response(`Webhook error: ${error.message}`, {
        status: 400,
      });
    }

    return new Response("Webhook error", {
      status: 400,
    });
  }

  console.log("webhook hit");

  return new Response(null, {
    status: 200,
  });
};
