'use strict';

angular.module('yogurtCultureApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('edit-product', {
        url: '/edit-product/:productId',
        templateUrl: 'app/admin/partials/edit-product/edit-product.html',
        controller: 'EditProductCtrl'
      });
  });