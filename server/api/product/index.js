'use strict';

var express = require('express');
var controller = require('./product.controller');
var auth = require('../../auth/auth.service');
var fileupload = require('fileupload').createFileUpload(__dirname + '/uploadDir').middleware;

var router = express.Router();

router.get('/', controller.index);
router.get('/all', controller.index);
router.get('/limit/:limit', controller.limit);
router.get('/:id', controller.show)
router.get('/manage/:id', controller.show);
router.post('/', controller.create);
router.put('/addImages/:id', controller.addImages);
router.put('/addCategory/:id', controller.addCategory);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

// router.get('/', auth.hasRole('admin'), controller.index);
// router.get('/all', controller.index);
// router.get('/manage/:id', auth.hasRole('admin'), controller.show);
// router.post('/', auth.hasRole('admin'), controller.create);
// router.put('/addImages/:id', controller.addImages);
// router.put('/:id', auth.hasRole('admin'), controller.update);
// router.patch('/:id', auth.hasRole('admin'), controller.update);
// router.delete('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;