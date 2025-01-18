// src/middleware.js

import { defineMiddleware } from "astro:middleware";
import { createSessionClient } from "./server/appwrite";

export const onRequest = defineMiddleware(async ({ request, locals }, next) => {
  try {
    const { account, databases } = createSessionClient(request);
    locals.user = await account.get();
    locals.account = account
    locals.databases = databases
  } catch {}

  return next();
});
