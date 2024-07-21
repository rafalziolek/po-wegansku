import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { sendEmail } from "../../../utils/sendEmail";
import { storePurchaseInfo } from "../../../utils/storePurchaseInfo";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20" as any, // Use type assertion to bypass type check
  typescript: true,
});

export async function POST(request: Request) {
  const body = await request.text();
  const signature = headers().get("Stripe-Signature") as string;

  console.log("Received webhook event");

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    console.log("Webhook event constructed:", event);

    if (event.type === "checkout.session.completed") {
      const checkoutSession = event.data.object as Stripe.Checkout.Session;
      const purchaseId = checkoutSession.id;
      const customerName =
        checkoutSession.custom_fields?.find((field) => field.key === "imi")
          ?.text?.value || "Brak imienia";
      const customerEmail =
        checkoutSession.customer_details?.email || "rafal.ziolek@icloud.com"; // Use actual customer email if available

      const addPurchaseInfoToDb = await storePurchaseInfo(
        customerName,
        customerEmail,
        purchaseId
      );
      if (!addPurchaseInfoToDb.success) {
        console.error(
          "Failed to store purchase info:",
          addPurchaseInfoToDb.error
        );
        return NextResponse.json(
          { error: addPurchaseInfoToDb.error },
          { status: 500 }
        );
      }

      const downloadLink = `https://chmielvegan.com/success/${purchaseId}`;
      // Call the sendEmail function directly
      const emailResult = await sendEmail(
        customerEmail,
        customerName,
        downloadLink
      );
      if (!emailResult.success) {
        console.error("Failed to send email:", emailResult.error);
      } else {
        console.log("Email sent successfully");
      }
    }

    return new NextResponse(JSON.stringify(event), { status: 200 });
  } catch (error) {
    console.error("Error in webhook:", error);
    return new NextResponse("invalid signature", { status: 400 });
  }
}
