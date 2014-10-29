'use strict';

angular.module('yogurtCultureApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('edit-product', {
                url: '/edit-product/:productId',
                'views': {
                    '': {
                        templateUrl: 'app/edit-product/edit-product.html',
                        controller: 'EditProductCtrl'
                    },
                    'edit-images@edit-product': {
                        templateUrl: 'app/media/media.html',
                        controller: 'MediaCtrl'
                    }
                }

            });
    });