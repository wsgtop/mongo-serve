import Router from "koa-router";
import { logger } from "../../logger/log4js.js";
const router = new Router();

import d from "./data.js";
router.get("/user", (ctx) => {
  // ctx.status = 200;
  ctx.body = "result";
  // return;
});
router.get("/user/index", async (ctx) => {
  logger.info(ctx.query); //{ aid: '123' }       获取的是对象   用的最多的方式  **推荐
  logger.info(ctx.querystring); //aid=123&name=zhangsan      获取的是一个字符串
  logger.info(ctx.url); //获取url地址
  ctx.body = "hello Koa";
});
router.get("/user/product/:aid", async (ctx) => {
  console.log(ctx.params);
  ctx.body = "这是商品页面";
});
router.get("/user/confirm", async (ctx) => {
  const data = await d.confirm(ctx.query);
  ctx.body = data;
});
export default router;
