import { mutation } from "./_generated/server";
import { v } from "convex/values";

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
  },
});
