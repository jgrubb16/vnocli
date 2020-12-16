import { Application, join, log, send } from "./deps.ts";
import vno  from "../../";

const port: number = 3000;
const server: Application = new Application();

await vno.config({
  label: "App",
  entry: "./",
  cdn: "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js",
});

server.use(async (context: any) => {
  await send(context, context.request.url.pathname, {
    root: Deno.cwd(),
    index: "index.html",
  });
});


const html = vno.createRenderer({
  title: "test",
  root: "app",
}, vno.root);

console.log(html, vno.root);

server.use(async (ctx, next) => {
  const filePath = ctx.request.url.pathname;
  if (filePath === "/") {
    ctx.response.type = "text/html";
    ctx.response.body = html;
  } else if (filePath === "/build.js") {
    ctx.response.type = "application/javascript";
    await send(ctx, filePath, {
      root: join(Deno.cwd(), "vno-build"),
      index: "build.js",
    });
  } else if (filePath === "/style.css") {
    ctx.response.type = "text/css";
    await send(ctx, filePath, {
      root: join(Deno.cwd(), "vno-build"),
      index: "style.css",
    });
  } else await next();
});

if (import.meta.main) {
  log.info("Server is up and running on port" + port );
  await server.listen({ port });
}

export { server };