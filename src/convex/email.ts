"use node";
import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import { vly } from "../lib/vly-integrations";

export const sendContactEmail = internalAction({
  args: {
    name: v.string(),
    email: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      await vly.email.send({
        to: "szkoła@engleo.pl",
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
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      // We don't throw here to avoid failing the mutation if email fails, 
      // but in a real app you might want to handle this differently.
    }
  },
});