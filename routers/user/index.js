import Router from "koa-router";
import { logger } from "../../logs/log4js.js";
const router = new Router();

import d from "./data.js";

router.post('/user/add1',async ctx =>{
  return d.addUser1(ctx)
})
router.post('/user/add2',async ctx =>{
  return d.addUser2(ctx)
})

export default router;
