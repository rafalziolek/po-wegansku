import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { sendEmail } from "../../utils/sendEmail"; // Adjust the import path as needed

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
  typescript: true,
});

export async function POST(request: Request) {
  const body = await request.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      const customerName = paymentIntent.metadata?.firstName || "Customer";
      const customerEmail = paymentIntent.receipt_email; // Use actual customer email if available

      // Call the sendEmail function directly
      const emailResult = await sendEmail(customerEmail, customerName);
      if (!emailResult.success) {
        console.error("Failed to send email:", emailResult.error);
      }
    }

    return new NextResponse(JSON.stringify(event), { status: 200 });
  } catch (error) {
    console.error("Error in webhook:", error);
    return new NextResponse("invalid signature", { status: 400 });
  }
}
