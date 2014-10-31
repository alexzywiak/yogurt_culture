'use strict';

angular.module('yogurtCultureApp')
  .controller('NewProductCtrl', function ($scope, $location, $http, ProductFactory) {
    $scope.product = {};
    $scope.product.name = 'New Product';

    $scope.createProduct = function(){
      ProductFactory.createProduct($scope.product);
    };
  });
