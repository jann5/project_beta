"use node";
import { internalAction } from "./_generated/server";
import nodemailer from "nodemailer";

export const testEmailSending = internalAction({
  args: {},
  handler: async (ctx) => {
    try {
      console.log("Testing Gmail SMTP email sending...");

      // Get credentials from environment variables
      const gmailUser = process.env.GMAIL_USER;
      const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
      const recipientEmail = process.env.CONTACT_EMAIL || gmailUser;

      if (!gmailUser || !gmailAppPassword) {
        throw new Error("Gmail credentials not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD environment variables.");
      }

      console.log(`Sending test email from ${gmailUser} to ${recipientEmail}`);

      // Create Gmail SMTP transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      });

      // Send test email
      const info = await transporter.sendMail({
        from: `"Engleo Test" <${gmailUser}>`,
        to: recipientEmail,
        subject: 'Test Email from Engleo - Gmail SMTP Verification',
        text: 'This is a test email to verify the Gmail SMTP system is working correctly.',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Email System Test ✅</h2>
            <p>This is a test email to verify that the Engleo contact form email notifications are working correctly using Gmail SMTP.</p>
            <p>If you receive this email, the system is functioning properly!</p>
          </div>
        `,
      });

      console.log("Email sent successfully:", info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error("Email test failed:", error);
      throw error;
    }
  },
});