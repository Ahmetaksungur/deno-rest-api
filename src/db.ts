import { Client } from "https://deno.land/x/mysql/mod.ts";
import { fixed } from "../database/fixed.ts";
import { flex } from "../database/flex.ts";
import { config } from 'https://deno.land/x/dotenv/mod.ts';

const env = config();

const client = await new Client().connect({
  hostname: env.DB_HOST,
  username: env.DB_USERNAME,
  db: env.DB_DATABASE,
  password: env.DB_PASSWORD,
});

fixed();
flex();

export { client }
