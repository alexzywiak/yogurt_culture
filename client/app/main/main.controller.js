'use strict';

angular.module('yogurtCultureApp')
  .controller('MainCtrl', function ($scope, ProductFactory) {
    $scope.products = {};

    // ProductFactory.getAllProducts()
    //   .success(function(products){
    //     $scope.products = products;
    //   });

    ProductFactory.getSomeProducts(3)
      .success(function(products){
        $scope.products = products;
      });
  });
