import { logger } from '../logs/log4js.js';

import mongoose from "mongoose";

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
const connect  =await mongoose.connect(url,options);

logger.info(mongoose.connection)