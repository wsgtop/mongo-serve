import { logger } from "../../logs/log4js.js";
import UserExtsModel from "../../models/userExt.js";

const data = {
  username: "Who are you ?"
}
UserExtsModel.create(data)