import { Router } from 'https://deno.land/x/oak/mod.ts'
import { Application } from 'https://deno.land/x/oak/mod.ts'
import { api } from '../route/api.ts'
import { web } from '../route/web.ts'

const app = new Application()
const router = new Router();
api(router);
web(router);
app.use(router.routes())
app.use(router.allowedMethods())
export { app }