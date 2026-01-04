"use node";
import { internalAction } from "./_generated/server";
import { VlyIntegrations } from "@vly-ai/integrations";

export const testEmailSending = internalAction({
  args: {},
  handler: async (ctx) => {
    try {
      const vly = new VlyIntegrations({
        deploymentToken: process.env.VLY_INTEGRATION_KEY || "",
      });

      const result = await vly.email.send({
        to: "hejkatuhejka3@gmail.com",
        subject: "Test Email from Engleo - Email System Verification",
        text: "This is a test email to verify the email system is working correctly.",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Email System Test</h2>
            <p>This is a test email to verify that the Engleo contact form email notifications are working correctly.</p>
            <p>If you receive this email, the system is functioning properly! ✅</p>
          </div>
        `,
      });

      console.log("Email test result:", result);
      return result;
    } catch (error) {
      console.error("Email test failed:", error);
      throw error;
    }
  },
});
