'use strict';

angular.module('yogurtCultureApp')
    .controller('ManageProductsCtrl', function($scope, $http, ProductFactory) {

        $scope.products = {};

        ProductFactory.getAllProducts()
            .success(function(products) {
                $scope.products = products;
            });


        $scope.removeProduct = function(productId) {
            ProductFactory.removeProduct(productId)
                .success(function() {
                    ProductFactory.getAllProducts()
                        .success(function(products) {
                            $scope.products = products;
                        });
                });
        };
    });