import dbs from '../dbs/dbOpsMongo.js'
import user from '../models/user.js'

const data = {
  username: "王晓武",
  userpwd: "123456",
  userage: 15,
  logindate: new Date(),
};

await dbs.insert(user,data)
