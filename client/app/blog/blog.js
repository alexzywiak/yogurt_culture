'use strict';

angular.module('yogurtCultureApp')
  .config(function ($stateProvider) {
    $stateProvider

      // Admin Manager States
      .state('admin.edit-posts', {
        url: '/admin/edit-posts/:postId',
        templateUrl: 'app/blog/edit-posts/edit-posts.html',
        controller: 'EditPostsCtrl'
      })
      .state('admin.manage-posts', {
        url: '/admin/manage-posts',
        templateUrl: 'app/blog/manage-posts/manage-posts.html',
        controller: 'ManagePostsCtrl'
      })
      .state('admin.new-post', {
        url: '/admin/new-post',
        templateUrl: 'app/blog/new-post/new-post.html',
        controller: 'NewPostCtrl'
      })
      .state('admin.view-post', {
        url: '/admin/view-post/:postId',
        templateUrl: 'app/blog/view-post/view-post.html',
        controller: 'ViewPostCtrl'
      })

      // User View States
      .state('blog', {
        url: '/blog',
        templateUrl: 'app/blog/blog.html',
        controller: 'BlogCtrl'
      })
      .state('blog.view-post', {
        url: '/blog/view-post/:postId',
        templateUrl: 'app/blog/view-post/view-post.html',
        controller: 'ViewPostCtrl'
      });
  });