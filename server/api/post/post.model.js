'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  type     : {type : String, default : 'posts'},
  title    : String,
  author   : String,
  body     : String,
  comments : [{ body: String, date: Date }],
  date     : { type: Date, default: Date.now },
  images   : Array
});

module.exports = mongoose.model('Post', PostSchema);