import Router from "koa-router";
import log4js from "../../logger/log4js.js";
const router = new Router();

import d from './data.js'
router.get("/", async (ctx) => {
  log4js.info('断点1')
  console.log('断点1...')
  const result =    await d.getUser()
  console.log('断点10...',result)
  ctx.body = result
  return result
  
  });
  router.get("/index", async (ctx) => {
    console.log(ctx.query); //{ aid: '123' }       获取的是对象   用的最多的方式  **推荐
    console.log(ctx.querystring); //aid=123&name=zhangsan      获取的是一个字符串
    console.log(ctx.url); //获取url地址
  });
  router.get("/product/:aid", async (ctx) => {
    console.log(ctx.params);
    ctx.body = "这是商品页面";
  });

export default router;
