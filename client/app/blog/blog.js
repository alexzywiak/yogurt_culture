'use strict';

angular.module('yogurtCultureApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('blog', {
        url: '/blog',
        templateUrl: 'app/blog/blog.html',
        controller: 'BlogCtrl'
      })
      .state('blog.edit-posts', {
        url: '/edit-posts/:postId',
        templateUrl: 'app/blog/edit-posts/edit-posts.html',
        controller: 'EditPostsCtrl'
      })
      .state('blog.manage-posts', {
        url: '/manage-posts',
        templateUrl: 'app/blog/manage-posts/manage-posts.html',
        controller: 'ManagePostsCtrl'
      })
      .state('blog.new-post', {
        url: '/new-post',
        templateUrl: 'app/blog/new-post/new-post.html',
        controller: 'NewPostCtrl'
      })
      .state('blog.view-post', {
        url: '/view-post/:postId',
        templateUrl: 'app/blog/view-post/view-post.html',
        controller: 'ViewPostCtrl'
      });
  });