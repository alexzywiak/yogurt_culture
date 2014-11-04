'use strict';

angular.module('yogurtCultureApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('admin.products.manage-products', {
                url: '/manage-products',
                templateUrl: 'app/admin/partials/products/manage-products/manage-products.html',
                controller: 'ManageProductsCtrl'
            })
            .state('admin.products.edit-product', {
                url: '/edit-product/:productId',
                templateUrl: 'app/admin/partials/products/edit-product/edit-product.html',
                controller: 'EditProductCtrl'
            })
            .state('admin.products.new-product', {
                url: '/new-product',
                templateUrl: 'app/admin/partials/products/new-product/new-product.html',
                controller: 'NewProductCtrl'
            })
            .state('admin.products.view-product', {
                url: '/view-product/:productId',
                templateUrl: 'app/admin/partials/products/view-product/view-product.html',
                controller: 'ViewProductCtrl'
            });
    });