import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(email: string, name: string) {
  try {
    const data = await resend.emails.send({
      from: "Nikola <nikola@chmielvegan.com>",
      to: [email],
      subject: "Thank you for your purchase!",
      html: `<p>Hello ${name},</p><p>Thank you for purchasing our ebook! Here is your download link: <a href="https://j8gqkv04whnigint.public.blob.vercel-storage.com/powegansku-naslodko-nikolachmiel-LAcTGscBCfMuFL10EWy9CROc6cB3Zt.pdf?download=1" download>Download Ebook</a></p>`,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}
