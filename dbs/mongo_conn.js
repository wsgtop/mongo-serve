import mongoose from "mongoose";
import { logger } from "../logger/log4js.js";
const url = 'mongodb://127.0.0.1/Wangshaoguang'
const options = {
  useNewUrlParser: true, // 使用新的连接字符串解析器
  useCreateIndex: true,// 使用默认构建索引
  useFindAndModify: false,
  useUnifiedTopology: true,// 使用MongoDB驱动程序的新连接管理引擎
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds, default 30。超时设置
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity,default 30
  family: 4 // Use IPv4, skip trying IPv6,如果未指定此选项，则MongoDB驱动程序先尝试IPv6，如果失败，则将尝试IPv4
};
mongoose.connect(url,options);

const db = mongoose.connection;

db.on("connecting", () => {
  logger.debug("建立到MongoDB服务器的初始连接  mongoose is connecting");
});
db.on("connected", () => {
  logger.debug("Mongoose成功建立到MongoDB服务器的初始连接，或者Mongoose在失去连接后重新连接  mongoose is connected");
});
db.on("open", () => {
  //  相当于 connected
  logger.debug("Mongoose成功建立到MongoDB服务器的初始连接，或者Mongoose在失去连接后重新连接  mongoose is open");
});
db.on("disconnecting", () => {
  logger.debug("调用Connection#close()来断开与MongoDB的连接, mongoose is disconnecting");
});
db.on("disconnected", () => {
  logger.debug("Mongoose失去与MongoDB服务器的连接。可能是由于代码显式关闭了连接，数据库服务器崩溃或网络连接问题所致。 mongoose is disconnected");
});
db.on("close", () => {
  logger.debug("调用Connection#close()成功断开与MongoDB的连接。 mongoose is close");
});
db.on("reconnected", () => {
  logger.debug("Mongoose失去与MongoDB的连接并成功重新连接。 mongoose is reconnected");
});
db.on("error", () => {
  logger.error("parseError由于数据格式错误或有效负载大于16MB而导致连接发生错误。 mongoose is error");
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
export const mongoDBServer = db;
