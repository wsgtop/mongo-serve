import _ from 'lodash'

const insert = async (dbModel,data) =>{
  const result = await dbModel.create(data)
  return result ;
}
const update = async (dbModel,data) =>{
  const result = await dbModel.create(data)
  return result ;
}
export default  {insert,update} 