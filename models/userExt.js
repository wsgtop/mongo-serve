import  mongoose  from "mongoose";
const { Schema } = mongoose;
const UserExtsSchema = new Schema({
  username: String,
  createTime: { type: Date, default: new Date() },
  updateTime: { type: Date, default: new Date() },
  count: Number,
  hidden: Boolean,
  binary: Buffer,
  age: { type: Number, min: 18, max: 65 },
  ofMixed: [Schema.Types.Mixed],
  ofObjectId: [Schema.Types.ObjectId],
  birthday: Date
});
const UserExtsModel = mongoose.model("UserExt", UserExtsSchema,'tempUserExt');
export default UserExtsModel;
