import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

export const send = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("messages", {
      name: args.name,
      email: args.email,
      content: args.content,
      status: "new",
    });

    // Schedule the email sending action
    // We use a try-catch block or ensure internal.email exists by fixing the email.ts file
    await ctx.scheduler.runAfter(0, internal.email.sendContactEmail, {
      name: args.name,
      email: args.email,
      content: args.content,
    });
  },
});