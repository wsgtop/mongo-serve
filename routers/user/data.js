import dbs from "../../dbs/dbOpsMongo.js";
import { logger } from "../../logs/log4js.js";
import UserModel from "../../models/user.js";
const addUser1 = async ctx => {
  // node.js原始使用
  logger.debug('ctx',ctx)
  const data = await parsePostData(ctx);
  const json = JSON.parse(data)
  logger.debug('json',json)
  const result = await dbs.add(UserModel, json);
  ctx.body = result;
  ctx.status = 200;
};
const addUser2 = async ctx => {
  // 引用koa-body使用
  logger.info(ctx.request.body)
  const result = await dbs.add(UserModel, ctx.request.body);
  ctx.body = 'result';
  ctx.status = 200;
};

function parsePostData(ctx) {
  logger.debug('ctx2',ctx)
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.on("data", (data) => {
        postdata += data;
        logger.debug('postdata2',postdata)
      });
      ctx.req.on("end", function () {
        resolve(postdata);
        logger.debug('postdata3',postdata)
      });
    } catch (error) {
      reject(error);
    }
  });
}

export default { addUser1 ,addUser2};