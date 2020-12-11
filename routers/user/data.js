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

export default   {getUser}
