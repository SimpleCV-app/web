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
    if (import.meta.env.INDEX_ONLY == "true" && url.pathname != "/e/page_disabled" && !(url.pathname == "/" || url.pathname.startsWith("/admin"))) {
      return rewrite("/e/page_disabled")
    }
    if (meta.maintenance_mode && url.pathname != "/e/maintenance_mode" && !url.pathname.startsWith("/admin")) {
      return rewrite("/e/maintenance_mode")
    }
  } catch {}

  return next();
});
