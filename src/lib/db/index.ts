import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { dbInfo } from 'drizzle.config';

export const sqlite = createClient(dbInfo.dbCredentials)
export const db = drizzle(sqlite);
