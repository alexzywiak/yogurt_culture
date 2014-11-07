'use strict';

angular.module('yogurtCultureApp')
    .config(function($stateProvider) {
        $stateProvider

            // Admin Managers
            .state('admin.products.manage-products', {
                url: '/admin/manage-products',
                templateUrl: 'app/partials/products/manage-products/manage-products.html',
                controller: 'ManageProductsCtrl'
            })
            .state('admin.products.edit-product', {
                url: '/admin/edit-product/:productId',
                templateUrl: 'app/partials/products/edit-product/edit-product.html',
                controller: 'EditProductCtrl'
            })
            .state('admin.products.new-product', {
                url: '/admin/new-product',
                templateUrl: 'app/partials/products/new-product/new-product.html',
                controller: 'NewProductCtrl'
            })
            .state('admin.products.view-product', {
                url: '/admin/view-product/:productId',
                templateUrl: 'app/partials/products/view-product/view-product.html',
                controller: 'ViewProductCtrl'
            })

            // Main Views
            .state('products', {
                url: '/products',
                templateUrl: 'app/partials/products/products.html',
                controller: 'ProductCtrl'
            })
            .state('products.view-product', {
                url: '/view-products/:productId',
                templateUrl: 'app/partials/products/view-product/view-product.html',
                controller: 'ViewProductCtrl'
            });
    });