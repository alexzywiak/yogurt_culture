'use strict';

angular.module('yogurtCultureApp')
  .controller('BlogCtrl', function ($scope, $state) {
    
    // Default State
    $state.go('blog.manage-posts');
  });
