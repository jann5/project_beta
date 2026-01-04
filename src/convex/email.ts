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
    try {
      // Create Gmail SMTP transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'hejkatuhejka3@gmail.com',
          pass: 'kbjz jhpg xwpu yhpb', // App password
        },
      });

      // Send email
      const info = await transporter.sendMail({
        from: '"Engleo Contact Form" <hejkatuhejka3@gmail.com>',
        to: 'hejkatuhejka3@gmail.com',
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

      console.log("Email sent successfully:", info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error("Failed to send email:", error);
      throw error;
    }
  },
});