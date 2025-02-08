// src/middleware.js

import { defineMiddleware } from "astro:middleware";
import { createSessionClient } from "./server/appwrite";

export const onRequest = defineMiddleware(async ({ request, rewrite, url, locals }, next) => {
  try {
    const { account, databases } = createSessionClient(request);
    locals.user = await account.get();
    locals.account = account
    locals.databases = databases

    const meta = await databases.getDocument(import.meta.env.DB0_ID, "meta", "ROOT")
    if (meta.maintenance_mode && url.pathname != "/e/maintenance_mode" && !url.pathname.startsWith("/admin")) {
      console.log("maintenance mode")
      return rewrite("/e/maintenance_mode")
    }
  } catch {}

  return next();
});
