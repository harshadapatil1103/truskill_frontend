import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Helper function to create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.hostinger.com", // SMTP host
    port: 587, // SMTP port
    secure: false, // Use TLS (false for 587, true for 465)
    auth: {
      user: process.env.EMAIL_USER, // Email username from environment variables
      pass: process.env.EMAIL_PASS, // Email password from environment variables
    },
    pool: true, // Enables connection pooling for efficiency
  });
};

// Helper function to generate HTML templates
const generateTemplate = (type, data) => {
  const fullName = `${data.firstName} ${data.lastName}`; // Combine first and last name

  if (type === "user") {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #48c9b0; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #ffffff; padding: 30px; border: 1px solid #e6f8f2; border-radius: 0 0 8px 8px; }
          .message-box { background: #e6f8f2; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .button { background: #48c9b0; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Truskill Academy</h1>
          </div>
          <div class="content">
            <h2>Thank you for reaching out, ${fullName}!</h2>
            <p>We appreciate your message and will respond shortly.</p>
            <div class="message-box">
              <h3>Your Message:</h3>
              <p>${data.message}</p>
            </div>
            <a href="https://www.truskill.in" class="button">Visit Our Website</a>
          </div>
        </div>
      </body>
      </html>
    `;
  } else if (type === "admin") {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #48c9b0; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #ffffff; padding: 30px; border: 1px solid #e6f8f2; border-radius: 0 0 8px 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Country Code:</strong> ${data.countryCode}</p>
            <p><strong>Phone Number:</strong> ${data.phoneNumber}</p>
            <p><strong>Message:</strong> ${data.message}</p>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
};

export async function POST(request) {
  try {
    // Parse JSON from the request body
    const { firstName, lastName, email, countryCode, phoneNumber, message } =
      await request.json();

    // Validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !countryCode ||
      !phoneNumber ||
      !message
    ) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create email transporter
    const transporter = createTransporter();

    // Prepare email options for the user
    const userMailOptions = {
      from: "support@truskill.in",
      to: email,
      subject: `Thank you for contacting Truskill Academy, ${firstName} ${lastName}`,
      html: generateTemplate("user", { firstName, lastName, message }),
    };

    // Prepare email options for the admin
    const adminMailOptions = {
      from: "support@truskill.in",
      to: "support@truskill.in",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: generateTemplate("admin", {
        firstName,
        lastName,
        email,
        countryCode,
        phoneNumber,
        message,
      }),
    };

    // Send emails
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    // Success response
    return new Response(
      JSON.stringify({ message: "Emails sent successfully." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending emails:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to send emails. Please try again later.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
