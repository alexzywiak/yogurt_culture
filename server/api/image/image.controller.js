'use strict';

var _ = require('lodash');
var Image = require('./image.model');
var multiparty = require('multiparty');
var fs = require('fs');
var path = require('path');

// Get list of images
exports.index = function(req, res) {
    Image.find(function(err, images) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, images);
    });
};

// Returns all images in an array of _ids.
exports.getImageArray = function(req, res) {

    Image.find({
        '_id': {
            '$in': req.body.images
        }
    }, function(err, images) {
        res.json(images);
    });
};

// Get a single image
exports.show = function(req, res) {
    Image.findById(req.params.id, function(err, image) {
        if (err) {
            return handleError(res, err);
        }
        if (!image) {
            return res.send(404);
        }
        return res.json(image);
    });
};

// Creates a new image in the DB.
exports.create = function(req, res) {

    var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {

        fs.readFile(files.file[0].path, function(err, data) {

            var newPath = path.resolve(__dirname, '../../../client/assets/images') + '/' + files.file[0].originalFilename;

            fs.writeFile(newPath, data, function(err) {

                files.file[0].serverPath = '/assets/images/' + files.file[0].originalFilename;

                Image.create(files.file[0], function(err, image) {
                    if (err) {
                        return handleError(res, err);
                    }
                    Image.find(function(err, images) {
                        if (err) {
                            return handleError(res, err);
                        }
                        return res.json(images);
                    });
                });
            });
        });
    });
}

// Updates an existing image in the DB.
exports.update = function(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Image.findById(req.params.id, function(err, image) {
        if (err) {
            return handleError(res, err);
        }
        if (!image) {
            return res.send(404);
        }
        var updated = _.merge(image, req.body);
        updated.save(function(err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, image);
        });
    });
};

// Deletes a image from the DB.
exports.destroy = function(req, res) {
    Image.findById(req.params.id, function(err, image) {
        if (err) {
            return handleError(res, err);
        }
        if (!image) {
            return res.send(404);
        }
        var imagePath = path.resolve(__dirname, '../../../client/') + image.serverPath;
        console.log(image.newPath);
        fs.unlink(imagePath, function(err) {
            if (err) {
                return handleError(res, err);
            }
            image.remove(function(err) {
                if (err) {
                    return handleError(res, err);
                }
                return res.send(204);
            });
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}