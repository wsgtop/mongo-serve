import Knex from 'knex'

const dbs = Knex({
  client: 'mysql2',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '123456',
    database : 'yx_reading'
  },
  acquireConnectionTimeout:10000
});

export default dbs