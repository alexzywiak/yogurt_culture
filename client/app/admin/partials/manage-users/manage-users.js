'use strict';

angular.module('yogurtCultureApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('manage-users', {
        url: '/manage-users',
        templateUrl: 'app/admin/partials/manage-users/manage-users.html',
        controller: 'ManageUsersCtrl'
      });
  });