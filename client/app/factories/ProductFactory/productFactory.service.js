'use strict';

angular.module('yogurtCultureApp')
    .factory('ProductFactory', function ProductFactory($http, $location) {

        var exports = {};

        exports.getAllProducts = function(){
          return $http.get('/api/products');
        };

        exports.getProductById = function(productId){
          return $http.get('/api/products/' + productId);
        };

        exports.createProduct = function(newProduct) {
            $http.post('/api/products', newProduct)
                .success(function(product) {
                    $location.path('/edit-product/' + product._id);
                });
        };

        exports.updateProduct = function(updatedProduct){
          return $http.put('/api/products/' + updatedProduct._id, updatedProduct);
        };

        exports.removeProduct = function(productId){
          return $http.delete('/api/products/' + productId);
        };

        return exports;
    });