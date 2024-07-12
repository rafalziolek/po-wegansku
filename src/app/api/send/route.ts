import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "hello world",
      html: `${name} <strong>it works!</strong>`,
    });

    return NextResponse.json(data);
  } catch (error) {
    // Check if error is an instance of Error
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    // If it's not an Error instance, return a generic error message
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
