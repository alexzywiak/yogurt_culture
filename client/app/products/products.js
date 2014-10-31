'use strict';

angular.module('yogurtCultureApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('edit-product', {
                url: '/edit-product/:productId',
                'views': {
                    '': {
                        templateUrl: 'app/products/edit-product/edit-product.html',
                        controller: 'EditProductCtrl'
                    },
                }
            })
            .state('manage-products', {
                url: '/manage-products',
                templateUrl: 'app/products/manage-products/manage-products.html',
                controller: 'ManageProductsCtrl'
            })
            .state('new-product', {
                url: '/new-product',
                templateUrl: 'app/products/new-product/new-product.html',
                controller: 'NewProductCtrl'
            })
            .state('view-product', {
                url: '/view-product/:productId',
                'views': {
                    '': {
                        templateUrl: 'app/products/view-product/view-product.html',
                        controller: 'ViewProductCtrl'
                    },
                }
            });
    });