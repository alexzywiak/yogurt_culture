'use strict';

angular.module('yogurtCultureApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('main.test', {
        url: '/test',
        templateUrl: 'components/partials/test/test.html',
        controller: 'TestCtrl'
      });
  });