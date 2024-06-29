import Stripe from "stripe";


const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20'
});
export default async function POST({request}) {
  const payload = await request.text();
  const response = await JSON.parse(payload);
  
  const sig = request.headers.get("Stripe-Signature");

  try {
    let event = stripe.webhooks.constructEvent(payload, sig, import.meta.env.STRIPE_WEBHOOK_SECRET);
    console.log("event", event.type);
    return response.json({status: "Success", event: event.type});
  } catch (err) {
     return response.json({status: "Failed", error: err});
  }
}
