// import { Logger } from 'log4js'
import dbs from '../../dbs/index.js'
import log4js from '../../logger/log4js.js'

const getUser = async () =>{
  try {
    log4js.info('断点2')
    console.log('断点2...')
    const data = await dbs('user').limit(1)
    console.log('断点3...')
    console.log('断点4...',data)
    log4js.info('断点3')
    return data
  } catch (error) {
    log4js.error(error)
    throw error
  }

}

import sha1 from 'sha1'
const confirm = async (query) =>{
try {
  const token = '1dd982cb081d44ac9e647cde8388093f'
  // log4js.debug(query)
  const {signature,timestamp,nonce,echostr} = query
  const str =  [token, timestamp, nonce].sort().join('');
  const sha = sha1(str)
  if(signature === sha){
    return echostr
  } else {
    return 'error'
  }

} catch (error) {
  // log4js.error(error)
  throw error
}

}
export default   {getUser,confirm}
