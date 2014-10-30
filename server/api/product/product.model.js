'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name        : String,
  description : String,
  category    : String,
  sku         : String,
  price       : Number,
  images      : Array,
  inStock     : Boolean
});

module.exports = mongoose.model('Product', ProductSchema);