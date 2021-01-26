import mongoose from "mongoose";
// const DB_URL = "mongodb://localhost:27017/Wangshaoguang";

mongoose.createConnection(
  "mongodb://localhost:27017/Wangshaoguang",
  {
    useNewUrlParser: true,useUnifiedTopology: true , useFindAndModify: false 
  }
);
/**
 * 连接成功
 */
mongoose.connection.on("connected", function () {
  console.log("Mongoose connection open to " + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on("error", function (err) {
  console.log("Mongoose connection error: " + err);
});

/**
 * 连接断开
 */
mongoose.connection.on("disconnected", function () {
  console.log("Mongoose connection disconnected");
});

// const { Schema } = conn;
// const UserSchema = new Schema({
//   username: { type: String }, //用户账号
//   userpwd: { type: String }, //密码
//   userage: { type: Number }, //年龄
//   logindate: { type: Date }, //最近登录时间
// });
// const User = mongoose.model("User", UserSchema);

// /**
//  * 插入
//  */
// const user = new User({
//   username: "Tracy McGrady", //用户账号
//   userpwd: "abcd", //密码
//   userage: 37, //年龄
//   logindate: new Date(), //最近登录时间
// });

// user.save(function (err, res) {
//   if (err) {
//     console.log("Error:" + err);
//   } else {
//     console.log("Res:" + res);
//   }
// });

// /**
//  * 更新
//  */
// const wherestr = {'username' : 'Tracy McGrady'};
// const updatestr = {'userpwd': 'zzzz'};

// User.update(wherestr, updatestr, function(err, res){
//     if (err) {
//         console.log("Error:" + err);
//     }
//     else {
//         console.log("Res:" + res);
//     }
// })

// /**
//  * 根据ID更新
//  */
// const id = '600e68b9b916fc415884e216';
// const updatestr2 = {'userpwd': 'abdc'};

// User.findByIdAndUpdate(id, updatestr2, function(err, res){
//     if (err) {
//         console.log("Error:" + err);
//     }
//     else {
//         console.log("Res:" + res);
//     }
// })

// /**
//  * 删除
//  */
// const wherestr = {'username' : 'Tracy McGrady'};

// User.remove(wherestr, function(err, res){
//     if (err) {
//         console.log("Error:" + err);
//     }
//     else {
//         console.log("Res:" + res);
//     }
// })
