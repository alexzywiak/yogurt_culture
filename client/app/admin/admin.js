'use strict';

angular.module('yogurtCultureApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        views : {
          '' : {
            templateUrl: 'app/admin/admin.html',
            controller: 'AdminCtrl',
          }, 
          
          'manage-products@admin':{
            templateUrl : 'app/manage-products/manage-products.html',
            controller  : 'ManageProductsCtrl'
          },
          'manage-users@admin':{
            templateUrl : 'app/admin/partials/manage-users/manage-users.html',
            controller  : 'ManageUsersCtrl'
          }
        }
      });
  });