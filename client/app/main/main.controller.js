'use strict';

angular.module('yogurtCultureApp')
  .controller('MainCtrl', function ($scope, ProductFactory) {
    $scope.products = {};

    ProductFactory.getAllProducts()
      .success(function(products){
        $scope.products = products;
      });
  });
