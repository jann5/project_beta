import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("testimonials")
      .withIndex("by_approved", (q) => q.eq("approved", true))
      .order("desc")
      .take(10);
  },
});

export const submit = mutation({
  args: {
    name: v.string(),
    role: v.optional(v.string()),
    content: v.string(),
    rating: v.number(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("testimonials", {
      name: args.name,
      role: args.role,
      content: args.content,
      rating: args.rating,
      approved: false, // Requires admin approval by default
    });
  },
});

// Internal mutation to seed data or approve testimonials
export const approve = mutation({
  args: { id: v.id("testimonials") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { approved: true });
  },
});

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("testimonials").take(1);
    if (existing.length > 0) return;

    const testimonials = [
      {
        name: "Anna Kowalska",
        role: "Uczeń",
        content: "Zajęcia z Panią Adrianną to czysta przyjemność. Profesjonalne podejście i świetna atmosfera.",
        rating: 5,
        approved: true,
      },
      {
        name: "Piotr Nowak",
        role: "Klient Biznesowy",
        content: "Szkolenia dla naszej firmy zostały przeprowadzone na najwyższym poziomie. Polecam!",
        rating: 5,
        approved: true,
      },
      {
        name: "Katarzyna Wiśniewska",
        role: "Studentka",
        content: "Dzięki tym lekcjom zdałam egzaminy na studiach bez stresu. Bardzo dziękuję!",
        rating: 5,
        approved: true,
      },
    ];

    for (const t of testimonials) {
      await ctx.db.insert("testimonials", t);
    }
  },
});
