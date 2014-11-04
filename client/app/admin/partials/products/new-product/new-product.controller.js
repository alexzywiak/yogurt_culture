'use strict';

angular.module('yogurtCultureApp')
  .controller('NewProductCtrl', function ($scope, $state, $http, ProductFactory) {
    $scope.product = {};
    $scope.product.name = 'New Product';

    $scope.createProduct = function(){
      ProductFactory.createProduct($scope.product)
        .success(function(product){
          $state.go('admin.products.edit-product', {productId : product._id});
        });
    };
  });
