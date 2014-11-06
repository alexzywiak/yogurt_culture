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
                url: '/admin/products',
                templateUrl: 'app/partials/products/products.html',
                controller: 'ProductCtrl'
            })
            // Blog Templates
            .state('admin.blog', {
                url: '/admin/blog',
                templateUrl: 'app/partials/blog/blog.html',
                controller: 'BlogCtrl'
            });
            
    });