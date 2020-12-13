import Koa from "koa";
import logger from "koa-logger";
import moment from "moment";

import log4js from "./logger/log4js.js";
import router from "./routers/user/index.js";

const app = new Koa();



// 添加请求日志
const log = logger((str) => {
  console.log(moment().format("YYYY-MM-DD HH:mm:ss") + str);
});
app.use(log);

//启动路由
app.use(router.routes());

// 在所有路由中间件最后调用，此时更加ctx.status设置response响应头
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log("start server listen 3000,loading ...");
});

app.on("error", (err, ctx) => {
  log4js.error(err);
});
app.on("error-info", (err, ctx) => {
  log4js.info(err);
});
