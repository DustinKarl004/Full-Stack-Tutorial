import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate form data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if email password is configured
    const emailPassword = process.env.EMAIL_PASSWORD;
    
    // For development purposes, allow form success even without real email sending
    if (!emailPassword) {
      console.warn('EMAIL_PASSWORD environment variable not set. Email will not be sent.');
      // Return success response for development, but log the message for debugging
      console.log('Would have sent email with:', { name, email, subject, message });
      return NextResponse.json({ 
        message: 'Form submission recorded (Note: Email not actually sent - EMAIL_PASSWORD not configured)',
        development: true
      });
    }

    // Create a transporter with TLS verification disabled
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'karlabalos04@gmail.com',
        pass: emailPassword,
      },
      tls: {
        rejectUnauthorized: false // This disables certificate verification
      }
    });

    // Email content
    const mailOptions = {
      from: email,
      to: 'karlabalos04@gmail.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr>
        <p>This email was sent from the contact form on Full Stack Tutorial website.</p>
        <p><em>Developed by Dustin Karl D. Abalos - A Full Stack Web Developer</em></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 