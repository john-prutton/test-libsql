import type { Config } from "drizzle-kit";
import { env } from "@/lib/env.mjs";
import "dotenv/config"

export const dbInfo = env.DATABASE_AUTH_TOKEN ? {
  driver: "turso",
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN
  }
} : {
  driver: "libsql",
  dbCredentials: {
    url: env.DATABASE_URL
  }
}

export default {
  schema: "./src/lib/db/schema",
  out: "./src/lib/db/migrations",
  ...dbInfo
} satisfies Config;