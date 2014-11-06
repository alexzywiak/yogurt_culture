'use strict';

angular.module('yogurtCultureApp')
  .controller('NewPostCtrl', function ($scope, $state, PostFactory) {
    $scope.post = {};
    $scope.post.title = 'New Title';

    $scope.createPost = function(){
      PostFactory.createPost($scope.post)
        .success(function(post){
          $state.go('blog.edit-posts', {postId : post._id});
        });
    };
  });
