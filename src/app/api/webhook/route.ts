import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = headers().get("Stripe-Signature") as string;

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-06-20",
    typescript: true,
  });
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
    console.log(event.data.object);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const customerEmail = session.customer_email;
      const customerName = session.metadata?.firstName || "Customer";
      await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({
          email: customerEmail,
          name: customerName,
        }),
      });
    }

    return new NextResponse(JSON.stringify(event), { status: 200 });
  } catch (error) {
    console.error("Error in webhook:", error);
    return new NextResponse("invalid signature", { status: 400 });
  }
}
