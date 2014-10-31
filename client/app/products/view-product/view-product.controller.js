'use strict';

angular.module('yogurtCultureApp')
    .controller('ViewProductCtrl', function($scope, $stateParams, ProductFactory, ImageFactory) {

        $scope.product = {};
        $scope.productImages = {};
        $scope.mainImageUrl = '';

        ProductFactory.getProductById($stateParams.productId)
            .success(function(product) {
                $scope.product = product;
                if ($scope.product.images && $scope.product.images.length > 0) {
                    ImageFactory.getImagesFromIdArray($scope.product.images)
                        .success(function(images) {
                            $scope.productImages = images;
                            $scope.mainImageUrl = images[0].serverPath || '';
                        });
                }
            });

        $scope.setImage = function(imgUrl) {
            $scope.mainImageUrl = imgUrl;
        };
    });