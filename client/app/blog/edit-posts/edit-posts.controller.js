'use strict';

angular.module('yogurtCultureApp')
  .controller('EditPostsCtrl', function ($scope, $stateParams, $state, PostFactory) {
    
    $scope.post = {};

    PostFactory.getPostById($stateParams.postId)
      .success(function(post){
        $scope.post = post;
      });


    $scope.updatePost = function(){
      PostFactory.updatePost($scope.post)
        .success(function(post){
          $scope.post = post;
        });
    };

    $scope.removePost = function(postId){
      PostFactory.removePost(postId)
        .success(function(){
          $state.go('blog.manage-posts');
        });
    };  
  });
