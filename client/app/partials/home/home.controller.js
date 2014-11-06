'use strict';

angular.module('yogurtCultureApp')
  .controller('HomeCtrl', function ($scope, ProductFactory) {
    
    ProductFactory.getSomeProducts(3)
      .success(function(products){
        $scope.products = products;
      });
  });
