'use strict';

var _ = require('lodash');
var Product = require('./product.model');
var multiparty = require('multiparty');
var fs = require('fs');
var path = require('path');

// Get list of products
exports.index = function(req, res) {

    Product.find(function(err, products) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, products);
    });
};

// Get a single product
exports.show = function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (err) {
            return handleError(res, err);
        }
        if (!product) {
            return res.send(404);
        }
        return res.json(product);
    });
};

// Creates a new product in the DB.
exports.create = function(req, res) {
    Product.create(req.body, function(err, product) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(201, product);
    });
};

exports.addImages = function(req, res) {

    Product.findById(req.params.id, function(err, product) {
        if (err) {
            return handleError(res, err);
        }
        if (!product) {
            return res.send(404);
        }

        var imageArray = [];

        for(var id in req.body){
            if(req.body[id]){
                imageArray.push(id);
            }
        }
        product.images = imageArray;
        product.save(function(err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, product);
        });
    });
};


// Updates an existing product in the DB.
exports.update = function(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Product.findById(req.params.id, function(err, product) {
        if (err) {
            return handleError(res, err);
        }
        if (!product) {
            return res.send(404);
        }
        var updated = _.merge(product, req.body);
        updated.save(function(err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, product);
        });
    });
};

// Deletes a post from the DB.
exports.destroy = function(req, res) {
    Product.findById(req.params.id, function(err, post) {
        if (err) {
            return handleError(res, err);
        }
        if (!post) {
            return res.send(404);
        }
        post.remove(function(err) {
            if (err) {
                return handleError(res, err);
            }
            return res.send(204);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}