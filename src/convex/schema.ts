import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    role: v.optional(v.string()),
  }).index("by_email", ["email"]),
  
  testimonials: defineTable({
    name: v.string(),
    role: v.optional(v.string()), // e.g. "Student", "Business Client"
    content: v.string(),
    rating: v.number(), // 1-5
    approved: v.boolean(), // for moderation
  }).index("by_approved", ["approved"]),
});