'use strict';

angular.module('yogurtCultureApp')
  .controller('ViewPostCtrl', function ($scope, $stateParams, PostFactory) {
    
    $scope.post = {};

    PostFactory.getPostById($stateParams.postId)
      .success(function(post){
        $scope.post = post;
      });
  });
