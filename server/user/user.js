import { logger } from "../../logs/log4js.js";
import UserModel from "../../models/user.js";

const data = {
  username: "王晓武",
  userpwd: "123456",
  userage: 15,
  logindate: new Date(),
};

/**
 * insertMany
 * 验证文档数组并将其全部插入MongoDB
 */
const insertMany = async (data) => {
  try {
    const res = await UserModel.insertMany(data);
    logger.info(res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};

/**
 * save
 * 保存通过插入一个新的文档到数据库
 * @param {*} params
 */
const save = async (params) => {
  try {
    const user = new UserModel(params);
    const res = await user.save();
    logger.info(res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};

/**
 * create
 * 保存一个或者多个文档到数据库
 * @param {*} params
 */
const create = async (params) => {
  try {
    const res = await UserModel.create(params);
    logger.info(res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};

/**
 * findOne
 * 查找一个文档
 * @param {*} query
 */
const findOne = async (query) => {
  try {
    const res = await UserModel.findOne(query);
    logger.info("查询成功", res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};

/**
 * find
 * @param {*} query
 */
const find = async (query) => {
  try {
    const res = await UserModel.find(query);
    logger.info("查询成功", res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};

/**
 * findById
 * _id用于查询，类似于findOne({_id:id})
 * @param {*} query
 */
const findById = async (ID) => {
  try {
    const res = await UserModel.findById(ID);
    logger.info("查询成功", res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};

/**
 * countDocuments
 * 计算filter数据库集合中匹配的文档数。
 * @param {*} filter
 */
const countDocuments = async (filter) => {
  try {
    const res = await UserModel.countDocuments(filter);
    logger.info("查询成功", res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};

/**
 * estimatedDocumentCount,大型集合更快
 * 计算filter数据库集合中匹配的文档数。
 * @param {*} filter
 */
const estimatedDocumentCount = async (filter) => {
  try {
    const res = await UserModel.estimatedDocumentCount(filter);
    logger.info("查询成功", res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};

/**
 * deleteMany
 * 删除符合条件的所有文档
 * @param {*} filter
 */
const deleteMany = async (filter) => {
  try {
    const res = await UserModel.deleteMany(filter);
    logger.info("查询成功", res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};

/**
 * deleteOne
 * 删除符合条件的第一个文档, 等同于.remove()
 * @param {*} filter
 */
const deleteOne = async (filter) => {
  try {
    const res = await UserModel.deleteOne(filter);
    logger.info("查询成功", res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};

/**
 * findByIdAndDelete
 * 删除符合条件的第一个文档
 * @param {*} filter
 */
const findByIdAndDelete = async (id) => {
  try {
    const res = await UserModel.findByIdAndDelete(id);
    logger.info("查询成功", res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};

/**
 * findByIdAndRemove
 * 查找匹配的文档，将其删除
 * @param {*} filter
 */
const findByIdAndRemove = async (id) => {
  try {
    const res = await UserModel.findByIdAndRemove(id);
    logger.info("查询成功", res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};

/**
 * findByIdAndUpdate
 * 查找匹配的文档，根据updatearg对其进行更新
 * @param {*} filter
 */
const findByIdAndUpdate = async (data) => {
  try {
    const res = await UserModel.findByIdAndUpdate(data);
    logger.info("查询成功", res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};

/**
 * findOneAndDelete
 * 查找匹配的文档，将其删除
 * @param {*} filter
 */
const findOneAndDelete = async (data) => {
  try {
    const res = await UserModel.findOneAndDelete(data);
    logger.info("查询成功", res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};

/**
 * findOneAndRemove
 * 查找匹配的文档，将其删除
 * @param {*} filter
 */
const findOneAndRemove = async (data) => {
  try {
    const res = await UserModel.findOneAndRemove(data);
    logger.info("查询成功", res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};

/**
 * findOneAndReplace
 * 查找匹配的文档，将其替换为提供的文档
 * @param {*} filter
 */
const findOneAndReplace = async (data) => {
  try {
    const res = await UserModel.findOneAndReplace(data);
    logger.info("查询成功", res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};

/**
 * findOneAndUpdate
 * 查找匹配的文档，根据updatearg对其进行更新
 */
const findOneAndUpdate = async (data) => {
  try {
    const res = await UserModel.findOneAndUpdate(data);
    logger.info("查询成功", res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};
/**
 * remove
 * 从数据库中删除此文档。
 * @param {*} filter
 */
const remove = async (filter) => {
  try {
    const res = await UserModel.remove(filter);
    logger.info("查询成功", res);
  } catch (error) {
    logger.error({ error });
    throw error;
  }
};

export default {
  insertMany,
  save,
  create,
  findOne,
  find,
  countDocuments,
  estimatedDocumentCount,
  deleteMany,
  deleteOne,
  findById,
  findByIdAndDelete,
  findByIdAndRemove,
  findByIdAndUpdate,
  findOneAndRemove,
  findOneAndDelete,
  findOneAndReplace,
  findOneAndUpdate,
  remove,
};
