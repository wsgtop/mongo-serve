import {dbs} from '../dbs/index.js'



const data  = await dbs('app_dict').select('code','name').limit(3)
console.log(data);