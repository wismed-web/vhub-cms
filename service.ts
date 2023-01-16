// `deno run -A server.ts`

import { opine, serveStatic } from "https://deno.land/x/opine@2.3.3/mod.ts";

// optional: allow environment to specify port
const port = Deno.env.get("PORT") || 8888;

// create server instance
const app = opine();

// bind the request to an absolute path or relative to the CWD
app.use(serveStatic("dist"));

// start the server
app.listen(port, () => console.log(`Listening on port ${port}`));
