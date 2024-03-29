'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  type        : {type : String, default : 'products'},
  name        : String,
  description : String,
  category    : Array,
  sku         : String,
  price       : Number,
  images      : Array,
  inStock     : Boolean
});

module.exports = mongoose.model('Product', ProductSchema);