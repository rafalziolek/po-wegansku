import { EmailTemplate } from '@/components/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailToCustomer(firstName: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['rafal.ziolek@icloud.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName }),
    });

    if (error) {
      throw new Error(error.message);
    }
    console.log('Email sent:', data);
    return data;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}