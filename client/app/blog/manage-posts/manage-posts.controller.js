'use strict';

angular.module('yogurtCultureApp')
  .controller('ManagePostsCtrl', function ($scope, $state, PostFactory) {

    $scope.posts = {};

    PostFactory.getAllPosts()
      .success(function(posts){
        $scope.posts = posts;
      });

    $scope.removePost = function(postId){
      PostFactory.removePost(postId)
        .success(function(){
          PostFactory.getAllPosts()
            .success(function(posts){
              $scope.posts = posts;
            });
        });
    };
  });
