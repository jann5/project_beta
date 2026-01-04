import { VlyIntegrations } from "@vly-ai/integrations";

// Initialize with the API key directly if the object syntax fails, 
// or try the static create method if available.
// Based on common patterns and the error, let's try passing the key directly 
// or checking if it picks up from env automatically if we don't pass anything (but error said token required).

export const vly = new VlyIntegrations(process.env.VLY_INTEGRATION_KEY || "missing_key");
