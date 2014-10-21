'use strict';

angular.module('yogurtCultureApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('manage-products', {
        url: '/manage-products',
        templateUrl: 'app/admin/partials/manage-products/manage-products.html',
        controller: 'ManageProductsCtrl'
      });
  });