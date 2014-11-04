'use strict';

angular.module('yogurtCultureApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('users', {
        url: '/users',
        templateUrl: 'app/admin/partials/users/users.html',
        controller: 'ManageUsersCtrl'
      });
  });