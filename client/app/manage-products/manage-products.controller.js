'use strict';

angular.module('yogurtCultureApp')
  .controller('ManageProductsCtrl', function ($scope, $http) {
    
    $scope.products = {};

    $http.get('/api/products')
      .success(function(products){
        $scope.products = products;
      });

    $scope.removeProduct = function(productId){
      $http.delete('/api/products/' + productId)
        .success(function(products){
          $scope.products = products;
        });
    };
  });
