import type { Config } from 'drizzle-kit';
import 'dotenv/config';

console.log(process.env.DATABASE_URL);
export default {
  schema: './src/drizzle/schema.ts',
  out: './migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
