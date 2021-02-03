import mongoose from "mongoose";
import {logger} from "../logger/log4js.js";
import chalk from 'chalk'
import {cfg} from '../config/config.js'
const {mongo} = cfg
const {connection,options} = mongo

const url = 'mongodb://'+connection.user+':'+connection.password+ '@'+connection.host + ':'+connection.port + '/' +connection.database
logger.info('数据库连接URL：',url)
mongoose.connect(url,options)

const db = mongoose.connection;

db.on("connecting", () => {
  logger.debug("建立到MongoDB服务器的初始连接  mongoose is connecting");
});
db.on("connected", () => {
  // logger.debug("Mongoose成功建立到MongoDB服务器的初始连接，或者Mongoose在失去连接后重新连接  mongoose is connected");
  // logger.debug(chalk.red.bold("Mongoose成功建立到MongoDB服务器的初始连接，或者Mongoose在失去连接后重新连接  mongoose is connected"));
  logger.info(chalk.green.bold("Mongoose成功建立到MongoDB服务器的初始连接，或者Mongoose在失去连接后重新连接  mongoose is connected"));
});
db.on("open", () => {
  //  相当于 connected
  logger.info("Mongoose成功建立到MongoDB服务器的初始连接，或者Mongoose在失去连接后重新连接  mongoose is open");
});
db.on("disconnecting", () => {
  logger.warn("调用Connection#close()来断开与MongoDB的连接, mongoose is disconnecting");
});
db.on("disconnected", () => {
  logger.warn("Mongoose失去与MongoDB服务器的连接。可能是由于代码显式关闭了连接，数据库服务器崩溃或网络连接问题所致。 mongoose is disconnected");
});
db.on("close", () => {
  logger.warn("调用Connection#close()成功断开与MongoDB的连接。 mongoose is close");
  mongoose.connect(url, {server:{auto_reconnect:true}});
});
db.on("reconnected", () => {
  logger.info("Mongoose失去与MongoDB的连接并成功重新连接。 mongoose is reconnected");
});
db.on("error", () => {
  logger.error("parseError由于数据格式错误或有效负载大于16MB而导致连接发生错误。 mongoose is error");
  mongoose.disconnect();
});
db.on("fullsetup", () => {
  logger.debug("当您连接到副本集且Mongoose已成功连接到主数据库和至少一个辅助数据库时发出。 mongoose is fullsetup");
});
db.on("all", () => {
  logger.debug("当您连接到副本集且Mongoose已成功连接到连接字符串中指定的所有服务器时发出。。 mongoose is all");
});
db.on("reconnectFailed", () => {
  logger.debug("当您连接到独立服务器且Mongoose用完时发出reconnectTries。发出此事件后，MongoDB驱动程序将不再尝试重新连接。如果您连接到副本集，则永远不会发出此事件。 mongoose is reconnectFailed");
});
// db.close() 显示关闭链接
export  default db
