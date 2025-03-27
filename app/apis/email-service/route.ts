import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service (e.g., Gmail, Outlook)
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: process.env.EMAIL_USER, // Receiver address (your email)
    subject: `New Message from ${name} (${email})`, // Subject line
    text: message, // Plain text body
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email." }, { status: 500 });
  }
}