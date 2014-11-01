'use strict';

angular.module('yogurtCultureApp')
    .config(function($stateProvider) {
        $stateProvider
            // Main Template
            .state('admin', {
                url: '/admin',
                templateUrl: 'app/admin/admin.html',
                controller: 'AdminCtrl'
            })
            // Product Templates
            .state('admin.products', {
                url: '/products',
                templateUrl: 'app/admin/partials/products/products.html',
                controller: 'ProductCtrl'
            })
            // Blog Templates
            .state('admin.blog', {
                url: '/blog',
                templateUrl: 'app/admin/partials/blog/blog.html',
                controller: 'BlogCtrl'
            });
            
    });