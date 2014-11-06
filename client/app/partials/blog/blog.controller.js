'use strict';

angular.module('yogurtCultureApp')
    .controller('BlogCtrl', function($scope, PostFactory) {
        $scope.sidebarMenu = [{
            title: 'Edit Posts',
            state: 'blog.manage-posts'
        }, {
            title: 'New Post',
            state: 'blog.new-post'
        }];

        $scope.posts = {};

        PostFactory.getAllPosts()
          .success(function(posts){
            $scope.posts = posts;
          });
    });