import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import EmailTemplate from '../../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, name, message } = await req.json();
    console.log(email, name, message);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: 'Thank You for Your Message!',
      react: EmailTemplate({ name: name, message: message }),
    });
    if (error) {
      // Return error status and message if the send operation fails
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    // Send a success response
    return NextResponse.json(
      { data: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in email sending:', error);
    // Handle any unexpected errors
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
