import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, institution, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: `Smart Learning <${process.env.RESEND_FROM_EMAIL || 'contact@smartlearning.pk'}>`,
      to: [process.env.CONTACT_EMAIL || 'sales@smartlearning.com'],
      replyTo: email,
      subject: `[Contact Form] ${subject || 'General Inquiry'} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #cc5500;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #78716c; width: 120px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #78716c;">Email</td><td style="padding: 8px 0;">${email}</td></tr>
            ${institution ? `<tr><td style="padding: 8px 0; color: #78716c;">Institution</td><td style="padding: 8px 0;">${institution}</td></tr>` : ''}
            <tr><td style="padding: 8px 0; color: #78716c;">Subject</td><td style="padding: 8px 0;">${subject || 'General Inquiry'}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e7e5e4; margin: 16px 0;" />
          <h3 style="color: #1c1917;">Message</h3>
          <p style="color: #44403c; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 },
    );
  }
}
