'use strict';

angular.module('yogurtCultureApp')
    .controller('EditProductCtrl', function($scope, $http, $stateParams, ProductFactory, ImageFactory) {

        $scope.product = {};
        $scope.productImages = {};
        $scope.updated = false;
        $scope.newCategory = '';

        // Gets a product
        // If it finds a product, gets the images for it.
        ProductFactory.getProductById($stateParams.productId)
            .success(function(product) {
                $scope.product = product;
                if ($scope.product.images) {
                    ImageFactory.getImagesFromIdArray($scope.product.images)
                        .success(function(images) {
                            $scope.productImages = images;
                        });
                }
            });

        $scope.updateProduct = function() {
            ProductFactory.updateProduct($scope.product)
                .success(function(product) {
                    console.log(product);
                    $scope.product = product;
                });
        };

        $scope.addCategory = function() {
            if ($scope.newCategory !== '' && $scope.product.category.indexOf($scope.newCategory) === -1) {
                $scope.product.category.push($scope.newCategory);
                $scope.newCategory = '';

                ProductFactory.addCategory($scope.product._id, $scope.product.category)
                    .success(function(product){
                        $scope.product = product;
                    });
            }
        };

        $scope.removeCategory = function(category) {
            var index = $scope.product.category.indexOf(category);
            if (index > -1) {
                $scope.product.category.splice(index, 1);
                ProductFactory.addCategory($scope.product._id, $scope.product.category)
                    .success(function(product){
                        $scope.product = product;
                    });
            }
        };
    });