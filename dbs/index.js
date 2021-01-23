import Knex from "knex";

const MySQLServer = Knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "my_test",
  },
  acquireConnectionTimeout: 10000,
});

import mongoose from "mongoose";
const mongoDBServer = await mongoose.connect("mongodb://127.0.0.1/Wangshaoguang");

export default { MySQLServer, mongoDBServer };
