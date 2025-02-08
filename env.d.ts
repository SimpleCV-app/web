/// <reference types="astro/client" />

type Models = import("node-appwrite").Models;

declare namespace App {
  interface Locals {
    user?: Models.User<Models.Preferences>;
    account?: Models.Account;
    databases?: Models.Databases;
  }
}

interface ImportMetaEnv {
  readonly APPWRITE_ENDPOINT: string;
  readonly APPWRITE_PROJECT: string;
  readonly APPWRITE_KEY: string;
  readonly DB0_ID: string;
  readonly DEV_INSTANCE: string;
  readonly SIGNUP_DISABLED: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
