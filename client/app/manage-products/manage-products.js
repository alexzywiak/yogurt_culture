'use strict';

angular.module('yogurtCultureApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('manage-products', {
        url: '/manage-products',
        templateUrl: 'app/manage-products/manage-products.html',
        controller: 'ManageProductsCtrl'
      });
  });