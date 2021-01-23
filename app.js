import Koa from "koa";
import koaLogger from "koa-logger";
import moment from "moment";

import { logger } from "./logger/log4js.js";
import user from "./routers/user/index.js";

const app = new Koa();
// 添加请求日志
const koaLog = koaLogger((str) =>
  logger.debug(moment().format("YYYY-MM-DD HH:mm:ss") + str)
);
app.use(koaLog);

// 利用中间件检测路由错误
app.use(async (ctx,next) => {
  try {
    await next()
    if(!ctx.body){
      ctx.status ='404'
      ctx.body = 'not found'  
    }
  } catch (error) {
    ctx.status ='500'
    ctx.body = 'server error'
    // throw error
  }
})

//启动路由
app.use(user.routes());

// 在所有路由中间件最后调用，此时更加ctx.status设置response响应头
app.use(user.allowedMethods());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(
    moment().format("YYYY-MM-DD HH:mm:ss") +
      "  start server listening on Port " +
      port
  );
});

app.on("error", (err, ctx) => {
  logger.error(err);
});
app.on("error-info", (err, ctx) => {
  logger.info(err);
});

