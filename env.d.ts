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
  readonly PUBLIC_APPWRITE_ENDPOINT: string;
  readonly PUBLIC_APPWRITE_PROJECT: string;
  readonly APPWRITE_KEY: string;
  readonly CV_DB0_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
