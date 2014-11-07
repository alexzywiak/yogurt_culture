'use strict';

angular.module('yogurtCultureApp')
    .controller('ViewProductCtrl', function($scope, $stateParams, ProductFactory) {

        $scope.product = {};
        $scope.productImages = [];
        $scope.mainImageUrl = '';

        ProductFactory.getProductById($stateParams.productId)
            .success(function(product) {
                $scope.product = product;
                $scope.imageArray = product.images;
                $scope.mainImageUrl = $scope.imageArray[0];
            });

        $scope.setImage = function(imgUrl) {
            $scope.mainImageUrl = imgUrl;
        };
    });