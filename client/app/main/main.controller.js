'use strict';

angular.module('yogurtCultureApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.products = {};

    $http.get('/api/products/all').success(function(products) {
      $scope.products = products;
    });
  });
