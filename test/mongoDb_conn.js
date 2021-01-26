import { logger } from '../logger/log4js.js';

import mongoose from "mongoose";
const connect =  mongoose.connect('mongodb://127.0.0.1:27017/Wangshaoguang');

const Schema = connect.Schema
var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

