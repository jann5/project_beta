"use node";
import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import { createVlyIntegrations } from "@vly-ai/integrations";

export const sendContactEmail = internalAction({
  args: {
    name: v.string(),
    email: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const vly = createVlyIntegrations({
        deploymentToken: process.env.VLY_INTEGRATION_KEY || "",
        debug: true,
      });

      const result = await vly.email.send({
        to: "hejkatuhejka3@gmail.com",
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

      console.log("Email send result:", result);

      if (!result.success) {
        console.error("Email sending failed:", result.error);
      }
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  },
});