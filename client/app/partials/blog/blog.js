'use strict';

angular.module('yogurtCultureApp')
  .config(function ($stateProvider) {
    $stateProvider

      .state('admin.blog.edit-posts', {
        url: '/admin/edit-posts/:postId',
        templateUrl: 'app/partials/blog/edit-posts/edit-posts.html',
        controller: 'EditPostsCtrl'
      })
      .state('admin.blog.manage-posts', {
        url: '/admin/manage-posts',
        templateUrl: 'app/partials/blog/manage-posts/manage-posts.html',
        controller: 'ManagePostsCtrl'
      })
      .state('admin.blog.new-post', {
        url: '/admin/new-post',
        templateUrl: 'app/partials/blog/new-post/new-post.html',
        controller: 'NewPostCtrl'
      })
      .state('admin.blog.view-post', {
        url: '/admin/view-post/:postId',
        templateUrl: 'app/partials/blog/view-post/view-post.html',
        controller: 'ViewPostCtrl'
      });
  });