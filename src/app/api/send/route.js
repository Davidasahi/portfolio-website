// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: subject,
      react: (
        <>
          <h3>Hi!</h3>
          <p>Thank you for contacting us!</p>
          <p>{message}</p>
        </>
      ),
      // EmailTemplate({ firstName: 'John', message: message }),
    });
    if (error) {
      return res.json({ error }, { status: 500 });
    }
    // return res.status(200).json({ data: 'Email sent successfully' });
    return NextResponse.status(200).json({
      data: 'Email sent successfully',
      data,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
