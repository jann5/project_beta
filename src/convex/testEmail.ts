"use node";
import { internalAction } from "./_generated/server";
import nodemailer from "nodemailer";

export const testEmailSending = internalAction({
  args: {},
  handler: async (ctx) => {
    console.log("=== EMAIL TEST STARTED ===");
    console.log(`Test initiated at: ${new Date().toISOString()}`);
    
    try {
      console.log("Testing Gmail SMTP email sending...");

      // Get credentials from environment variables
      const gmailUser = process.env.GMAIL_USER;
      const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
      const recipientEmail = process.env.CONTACT_EMAIL || gmailUser;

      console.log("\n--- Environment Check ---");
      console.log(`GMAIL_USER: ${gmailUser ? `✓ ${gmailUser}` : '✗ NOT SET'}`);
      console.log(`GMAIL_APP_PASSWORD: ${gmailAppPassword ? '✓ SET (hidden)' : '✗ NOT SET'}`);
      console.log(`CONTACT_EMAIL: ${recipientEmail}`);

      if (!gmailUser || !gmailAppPassword) {
        const errorMsg = "Gmail credentials not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD environment variables.";
        console.error(`\n❌ ${errorMsg}`);
        throw new Error(errorMsg);
      }

      console.log(`\n--- Email Configuration ---`);
      console.log(`Sending test email from ${gmailUser} to ${recipientEmail}`);

      // Create Gmail SMTP transporter
      console.log("\nCreating transporter...");
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      });

      console.log("Transporter created ✓");
      console.log("\nSending email...");

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

      console.log("\n✅ EMAIL SENT SUCCESSFULLY!");
      console.log(`Message ID: ${info.messageId}`);
      console.log(`Response: ${info.response}`);
      console.log(`Accepted: ${info.accepted?.join(', ')}`);
      console.log(`Rejected: ${info.rejected?.length ? info.rejected.join(', ') : 'None'}`);
      console.log("\n=== EMAIL TEST COMPLETED SUCCESSFULLY ===");
      
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error("\n❌ EMAIL TEST FAILED!");
      console.error("Error type:", error instanceof Error ? error.constructor.name : typeof error);
      console.error("Error message:", error instanceof Error ? error.message : String(error));
      console.error("Full error:", error);
      console.error("\n=== EMAIL TEST FAILED ===");
      throw error;
    }
  },
});