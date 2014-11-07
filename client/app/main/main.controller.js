'use strict';

angular.module('yogurtCultureApp')
.controller('MainCtrl', function ($scope, ProductFactory) {
  ProductFactory.getSomeProducts(3)
  .success(function(products){
    $scope.products = products;
  });
});
