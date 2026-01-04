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
    // Validate input
    if (!args.name.trim() || !args.email.trim() || !args.content.trim()) {
      throw new Error("All fields are required");
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(args.email)) {
      throw new Error("Invalid email address");
    }

    // Store message in database
    await ctx.db.insert("messages", {
      name: args.name,
      email: args.email,
      content: args.content,
      status: "new",
    });

    // Schedule the email sending action (non-blocking)
    await ctx.scheduler.runAfter(0, internal.email.sendContactEmail, {
      name: args.name,
      email: args.email,
      content: args.content,
    });
  },
});