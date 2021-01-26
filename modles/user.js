import { mongoDBServer } from "../dbs/mongo_conn.js";

const Schema = mongoDBServer.Schema;
const userSchema = new Schema({
  username: { type: String },
  userpwd: { type: String },
  userage: { type: Number },
  logindate: { type: Date },
});
const UserModel = mongoDBServer.model('User',userSchema)


