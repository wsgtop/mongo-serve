import Koa from "koa";
import koaLogger from "koa-logger";
import moment from "moment";

import { logger } from "./logger/log4js.js";
import router from "./routers/user/index.js";

const app = new Koa();
// 添加请求日志
const koaLog = koaLogger(str =>
  logger.debug(moment().format("YYYY-MM-DD HH:mm:ss") + str));
app.use(koaLog);

//启动路由
app.use(router.routes());

// 在所有路由中间件最后调用，此时更加ctx.status设置response响应头
app.use(router.allowedMethods());
const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(moment().format("YYYY-MM-DD HH:mm:ss") + "  start server listening on Port " + port);
});

app.on("error", (err, ctx) => {
  logger.error(err);
});
app.on("error-info", (err, ctx) => {
  logger.info(err);
});