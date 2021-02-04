import _ from "lodash";

// 插入 save()
const add = async (dbModel, data) => {
  const model = new dbModel(data);
  const result = await model.save();
  return result;
};
// 另一种新增的方式，data可以是一个对象或者是数组，可以批量添加
// await Character.create({ name: 'Jean-Luc Picard' });
// await Character.create([{ name: 'Will Riker' }, { name: 'Geordi LaForge' }]);
// await Character.create([{ name: 'Jean-Luc Picard' }], { session });
const addMultiple = async (dbModel, data, options) => {
  // 相当于多次调用sava()，每次添加一个文档
  let result;
  if (options) {
    result = await dbModel.create(data, options);
  } else {
    result = await dbModel.create(data);
  }
  return result;
};
const addMany = async (dbModel, data, options) => {
  // 使用这个比create要快,不同于save，这个是一次性加入多个文档
  let result;
  if (options) {
    result = await dbModel.insertMany(data, options);
  } else {
    result = await dbModel.insertMany(data);
  }
  return result;
};
// 更新 update() 基本上可以满足
// findByIdAndUpdate()、findOneAndUpdate()

// 删除 remove()  返回是否成功以及影响的行数
// findByIdAndRemove()、findOneAndRemove()

// 删除文档
const del = async (dbModel, filter) => {
  let res;
  if (filter) {
    res = await dbModel.remove(filter);
  } else {
    res = await dbModel.remove();
  }
  return res;
};
// 删除所有匹配的文档
const delMany = async (dbModel, where) => {
  const res = await dbModel.deleteMany(where);
  return res;
};
// 删除匹配的第一个文档
const delOne = async (dbModel, where) => {
  const res = await dbModel.deleteOne(where);
  return res;
};
// 查询 find()
const get = async (dbModel, where, options) => {
  let res;
  switch (_.isBoolean(options)) {
    case false:
      res = await dbModel.find(where, select);
      break;
    default:
      res = await dbModel.find(where, select, options);
  }
  return res;
};

/**
 * 通过 _id 字段查询单个文档
 * @param {*} dbModel model
 * @param {*} id  _id字段
 * @param {*} select  需要返回的字段
 * @param {*} options 选项
 */
const getById = async (dbModel, id, select, options) => {
  let res;
  switch (_.isBoolean(options)) {
    case false:
      res = await dbModel.findById(id, select);
      break;
    default:
      res = await dbModel.findById(id, select, options);
  }
  return res;
};
const getByIdAndDel = async (dbModel, id) => {
  return await dbModel.findByIdAndDelete(id);
};
const getByIdAndRemove = async (dbModel, id, select, options) => {
  let res;
  switch (_.isBoolean(options)) {
    case false:
      res = await dbModel.findByIdAndRemove(id, select);
      break;
    default:
      res = await dbModel.findByIdAndRemove(id, select, options);
  }
  return res;
};
const getByIdAndUpdate = async (dbModel, id, data, options) => {
  let res;
  switch (_.isBoolean(options)) {
    case false:
      res = await dbModel.findByIdAndUpdate(id, data, options);
      break;
    default:
      res = await dbModel.findByIdAndUpdate(id, data, options);
  }
  return res;
};

// TODO 条件查询

// 数量查询 count()
// 查询大型文档比countDocument要快
const getFileCount = async (dbModel) => {
  const count = await dbModel.estimatedDocumentCount();
  return count;
};
const getFilterCount = async (dbModel, filter) => {
  const result = await dbModel.countDocuments(filter);
  return result;
};
// 根据_id查询 findById()

// 模糊查询 正则匹配

// TODO 分页查询

/**
 * 去重 distinct()
 * @param {*} dbModel model
 * @param {*} field 需要处理的字段
 * @param {*} where 条件
 */
const distinct = async (dbModel, field, where) => {
  const result = await dbModel.discint(field, where);
  return result;
};

// 查找一条记录 findOne()
const getOne = async (dbModel, field, filter) => {
  let res;
  switch (_.isBoolean(field)) {
    case false:
      res = await dbModel.findOne(filter, field);
      break;
    default:
      res = await dbModel.findOne(filter, field);
  }
  return res;
};
const getOneAndDel = async (dbModel, where, options) => {
  let res;
  switch (_.isBoolean(options)) {
    case false:
      res = await dbModel.findOneAndDelete(where);
      break;
    default:
      res = await dbModel.findOneAndDelete(where, options);
  }
  return res;
};
const getOneAndRemove = async (dbModel, where, options) => {
  let res;
  switch (_.isBoolean(options)) {
    case false:
      res = await dbModel.findOneAndRemove(where);
      break;
    default:
      res = await dbModel.findOneAndRemove(where, options);
  }
  return res;
};
const getOneAndReplace = async (dbModel, filter, updateData, options) => {
  let res;
  switch (_.isBoolean(options)) {
    case false:
      res = await dbModel.findOneAndReplace(filter, updateData);
      break;
    default:
      res = await dbModel.findOneAndReplace(filter, updateData, options);
  }
  return res;
};
const getOneAndUpdate = async (dbModel, filter, updateData, options) => {
  let res;
  switch (_.isBoolean(options)) {
    case false:
      res = await dbModel.findOneAndUpdate(filter, updateData);
      break;
    default:
      res = await dbModel.findOneAndUpdate(filter, updateData, options);
  }
  return res;
};

const update = async (dbModel, filter, updateData, options) => {
  let res;
  switch (_.isBoolean(options)) {
    case false:
      res = await dbModel.update(filter, updateData);
      break;
    default:
      res = await dbModel.update(filter, updateData, options);
  }
  return res;
};
const updateOne = async (dbModel, filter, updateData, options) => {
  let res;
  switch (_.isBoolean(options)) {
    case false:
      res = await dbModel.replaceOne(filter, updateData);
      break;
    default:
      res = await dbModel.replaceOne(filter, updateData, options);
  }
  return res;
};
const updateMany = async (dbModel, filter, updateData, options) => {
  let res;
  switch (_.isBoolean(options)) {
    case false:
      res = await dbModel.updateMany(filter, updateData);
      break;
    default:
      res = await dbModel.updateMany(filter, updateData, options);
  }
  return res;
};

export default {
  add,
  addMultiple,
  addMany,
  del,
  delMany,
  delOne,
  distinct,
  getFilterCount,
  getFileCount,
  get,
  getById,
  getByIdAndDel,
  getByIdAndRemove,
  getByIdAndUpdate,
  getOne,
  getOneAndDel,
  getOneAndRemove,
  getOneAndReplace,
  getOneAndUpdate,
  update,
  updateOne,
  updateMany,
};
