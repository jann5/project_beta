"use node";
import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import nodemailer from "nodemailer";

export const sendContactEmail = internalAction({
  args: {
    name: v.string(),
    email: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    console.log("=== Email Sending Started ===");
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log(`From: ${args.name} <${args.email}>`);
    console.log(`Message length: ${args.content.length} characters`);
    
    try {
      // Get credentials from environment variables
      const gmailUser = process.env.GMAIL_USER;
      const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
      const recipientEmail = process.env.CONTACT_EMAIL || gmailUser;

      console.log(`Gmail User: ${gmailUser ? '✓ Set' : '✗ Missing'}`);
      console.log(`Gmail App Password: ${gmailAppPassword ? '✓ Set' : '✗ Missing'}`);
      console.log(`Recipient Email: ${recipientEmail}`);

      if (!gmailUser || !gmailAppPassword) {
        const errorMsg = "Gmail credentials not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD environment variables.";
        console.error(`❌ ${errorMsg}`);
        throw new Error(errorMsg);
      }

      console.log("Creating Gmail SMTP transporter...");
      // Create Gmail SMTP transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      });

      console.log("Transporter created successfully");
      console.log("Preparing email content...");

      // Send email
      const info = await transporter.sendMail({
        from: `"Engleo Contact Form" <${gmailUser}>`,
        to: recipientEmail,
        subject: `Nowa wiadomość ze strony od: ${args.name}`,
        text: `Imię i nazwisko: ${args.name}\nEmail: ${args.email}\n\nWiadomość:\n${args.content}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Nowa wiadomość ze strony Engleo</h2>
            <p><strong>Imię i nazwisko:</strong> ${args.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${args.email}">${args.email}</a></p>
            <hr style="border: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Treść wiadomości:</strong></p>
            <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${args.content}</p>
          </div>
        `,
        replyTo: args.email, // Allow direct reply to the sender
      });

      console.log("✅ Email sent successfully!");
      console.log(`Message ID: ${info.messageId}`);
      console.log(`Response: ${info.response}`);
      console.log("=== Email Sending Completed ===");
      
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error("❌ Email sending failed!");
      console.error("Error details:", error);
      console.error("Error message:", error instanceof Error ? error.message : String(error));
      console.error("Error stack:", error instanceof Error ? error.stack : 'No stack trace');
      console.error("=== Email Sending Failed ===");
      throw error;
    }
  },
});