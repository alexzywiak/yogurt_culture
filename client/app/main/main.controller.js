'use strict';

angular.module('yogurtCultureApp')
  .controller('MainCtrl', function ($state) {
    $state.go('main.home');
  });
