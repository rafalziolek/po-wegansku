import { Resend } from "resend";
import { DownloadEbookEmail } from "../../emails/downloadEbook";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(email: string, name: string) {
  try {
    const data = await resend.emails.send({
      from: "Nikola <nikola@chmielvegan.com>",
      to: [email],
      subject: "Po Wegańsku. Na słodko. Twój ebook jest gotowy do pobrania!",
      react: DownloadEbookEmail({ name }),
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}
