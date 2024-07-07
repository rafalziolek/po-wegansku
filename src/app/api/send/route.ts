import { EmailTemplate } from "@/components/emailTemplate";
import { Resend } from "resend";

export async function POST(request: Request) {
  const { email, name } = await request.json();
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "hello world",
      html: `${name} <strong>it works!</strong>`,
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return Response.json(data);
  }
}
