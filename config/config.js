import fse from 'fs-extra'
export const cfg = await init()

async function init(){
  const serverJSON = await fse.readJson('./server.json')
  return serverJSON
}