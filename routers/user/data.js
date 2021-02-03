import dbs from "../../dbs/dbOpsMongo.js";
import { logger } from "../../logger/log4js.js";
import UserModel from "../../models/user.js";
const addUser = async (ctx) => {
  // node.js原始使用
  const data = await parsePostData(ctx);
  const result = await dbs.insert(UserModel, JSON.parse(data));
  ctx.body = result;
  ctx.status = 200;
};
const addUser2 = async (ctx) => {
  // 引用koa-body使用
  logger.info(ctx.request.body)
  const result = await dbs.insert(UserModel, ctx.request.body);
  ctx.body = 'result';
  ctx.status = 200;
};

function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.on("data", (data) => {
        postdata += data;
      });
      ctx.req.on("end", function () {
        resolve(postdata);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export default { addUser ,addUser2};