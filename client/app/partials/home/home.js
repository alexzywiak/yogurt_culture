'use strict';

angular.module('yogurtCultureApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.home', {
        url: '/home',
        templateUrl: 'app/partials/home/home.html',
        controller: 'HomeCtrl'
      });
  });