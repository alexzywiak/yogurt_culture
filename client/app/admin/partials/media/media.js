'use strict';

angular.module('yogurtCultureApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('media', {
        url: '/media',
        templateUrl: 'app/media/media.html',
        controller: 'MediaCtrl'
      });
  });