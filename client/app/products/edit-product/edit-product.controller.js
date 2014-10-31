'use strict';

angular.module('yogurtCultureApp')
    .controller('EditProductCtrl', function($scope, $http, $stateParams, $upload, ProductFactory, ImageFactory) {

        $scope.product = {};
        $scope.productImages = {};
        $scope.updated = false;

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
                    $scope.product = product;
                });
        };
    });