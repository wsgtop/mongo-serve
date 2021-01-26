import Knex from "knex";
import log from "../logger/log4js"

export const MySQLServer = async () =>{
  try {
   const connect = Knex({
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "123456",
      database: "my_test",
    },
    acquireConnectionTimeout: 10000,
  });
   log.debug('connect',connect)
   return connect
  } catch (error) {
    throw error
  }
}

