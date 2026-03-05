import { DescopeClient } from "@descope/node-sdk";

export const descopeClient = new DescopeClient({
  projectId: process.env.DESCOPE_PROJECT_ID
});