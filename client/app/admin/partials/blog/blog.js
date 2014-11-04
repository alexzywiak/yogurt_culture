'use strict';

angular.module('yogurtCultureApp')
  .config(function ($stateProvider) {
    $stateProvider

      .state('admin.blog.edit-posts', {
        url: '/edit-posts/:postId',
        templateUrl: 'app/admin/partials/blog/edit-posts/edit-posts.html',
        controller: 'EditPostsCtrl'
      })
      .state('admin.blog.manage-posts', {
        url: '/manage-posts',
        templateUrl: 'app/admin/partials/blog/manage-posts/manage-posts.html',
        controller: 'ManagePostsCtrl'
      })
      .state('admin.blog.new-post', {
        url: '/new-post',
        templateUrl: 'app/admin/partials/blog/new-post/new-post.html',
        controller: 'NewPostCtrl'
      })
      .state('admin.blog.view-post', {
        url: '/view-post/:postId',
        templateUrl: 'app/admin/partials/blog/view-post/view-post.html',
        controller: 'ViewPostCtrl'
      });
  });