import { app } from './src/route.ts'
import { client } from './src/db.ts'
import { config } from 'https://deno.land/x/dotenv/mod.ts';

const env = config();

const HOST = env.HOST
const PORT = env.PORT

console.log(`Listening on port ${PORT} ...`)
await app.listen(`${HOST}:${PORT}`)
await client.close();