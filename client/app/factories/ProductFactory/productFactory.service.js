'use strict';

angular.module('yogurtCultureApp')
    .factory('ProductFactory', function ProductFactory($http) {

        var exports = {};

        exports.getAllProducts = function(){
          return $http.get('/api/products');
        };

        exports.getSomeProducts = function(limit){
          console.log('Come Get Some! ' + limit);
          return $http.get('/api/products/limit/' + limit);
        };

        exports.getProductById = function(productId){
          return $http.get('/api/products/' + productId);
        };

        exports.createProduct = function(newProduct) {
            return $http.post('/api/products', newProduct);
        };

        exports.updateProduct = function(updatedProduct){
          return $http.put('/api/products/' + updatedProduct._id, updatedProduct);
        };

        exports.addCategory = function(productId, catArr){
          return $http.put('/api/products/addCategory/' + productId, catArr);
        };  

        exports.removeProduct = function(productId){
          return $http.delete('/api/products/' + productId);
        };

        return exports;
    });