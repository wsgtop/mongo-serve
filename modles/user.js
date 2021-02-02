import { mongoServer } from "../dbs/mongo_conn.js";
import mongoose from 'mongoose'
const {Schema} = mongoose;
const userSchema = new Schema({
  username: { type: String },
  userpwd: { type: String },
  userage: { type: Number },
  logindate: { type: Date },
});
const UserModel = mongoServer.model('User',userSchema) // 默认将model的name转成小写加上s，作为collection的名称
// const UserModel = mongoDBServer.model('User',userSchema,'admin') //可以传入第三个参数作为collection的名称
export default UserModel


