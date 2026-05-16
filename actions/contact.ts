'use server';

import { Resend } from 'resend';

export async function sendContactEmail(formData: FormData) {
  const apiKey =
    process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY;

  if (!apiKey) {
    console.error('RESEND_API_KEY is not defined in environment variables');
    return {
      error: 'Email service is currently unavailable. Please try again later.',
    };
  }

  const resend = new Resend(apiKey);

  try {
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = (formData.get('email') as string) || 'Not provided';
    const institution =
      (formData.get('institution') as string) || 'Not provided';
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name || !phone || !message) {
      return { error: 'Name, phone number, and message are required.' };
    }

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      process.env.NEXT_PUBLIC_RESEND_FROM_EMAIL ||
      'contact@smartlearning.pk';
    const contactEmail =
      process.env.CONTACT_EMAIL ||
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      'sales@smartlearning.pk';

    const { data, error } = await resend.emails.send({
      from: `Smart Learning Contact <${fromEmail}>`,
      to: [contactEmail],
      subject: `[${subject}] New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Phone: ${phone}
Email: ${email}
Institution: ${institution}
Subject: ${subject}

Message:
${message}
      `,
      replyTo: email !== 'Not provided' ? email : undefined,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { error: error.message };
    }

    return { success: true, data };
  } catch (error: unknown) {
    console.error('Server Action Error:', error);
    return {
      error:
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred. Please try again later.',
    };
  }
}
