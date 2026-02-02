
import axios from "axios";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {

  try {
    // Extract form data and reCAPTCHA response from the request body
    const { formData, captchaResponse } = await request.json();

    console.log("Request data:", { formData, captchaResponse });

    // Perform reCAPTCHA validation
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyResponse = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: secretKey,
          response: captchaResponse,
        },
      }
    );

    console.log("reCAPTCHA validation response:", verifyResponse.data);

    if (verifyResponse.data.success) {
      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Define email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECIPIENT,
        replyTo: formData.email,
        subject: `New brixbiz.com form submission from: ${formData.name}`,
        text: `
          Name: ${formData.name}
          Email: ${formData.email}

          Message: ${formData.message}
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return NextResponse.json({ message: "Form submitted successfully." }, { status: 200 });
    } else {
      // reCAPTCHA verification failed
      return NextResponse.json({ message: "reCAPTCHA verification failed." }, { status: 400 });
    }
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function OPTIONS() {
  // Handle pre-flight CORS requests
  return NextResponse.json({}, { status: 200 });
}
