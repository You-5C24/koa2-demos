/**
 * 重定向
 */
const Koa = require("koa");
const route = require("koa-route");
const app = new Koa();

const redirect = (ctx) => {
  ctx.response.redirect("/");
};

const main = (ctx) => {
  ctx.response.body = "hello node";
};

app.use(route.get("/", main));
app.use(route.get("/redirect", redirect));

app.use(main);
app.listen(3001);