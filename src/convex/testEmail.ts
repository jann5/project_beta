"use node";
import { internalAction } from "./_generated/server";
import nodemailer from "nodemailer";

export const testEmailSending = internalAction({
  args: {},
  handler: async (ctx) => {
    try {
      console.log("Testing Gmail SMTP email sending...");

      // Create Gmail SMTP transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'hejkatuhejka3@gmail.com',
          pass: 'kbjz jhpg xwpu yhpb',
        },
      });

      // Send test email
      const info = await transporter.sendMail({
        from: '"Engleo Test" <hejkatuhejka3@gmail.com>',
        to: 'hejkatuhejka3@gmail.com',
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