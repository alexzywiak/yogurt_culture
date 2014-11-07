'use strict';

angular.module('yogurtCultureApp')
    .controller('ProductCtrl', function($scope, ProductFactory) {
        $scope.sidebarMenu = [{
            title: 'Manage Products',
            state: 'products.manage-products'
        }, {
            title: 'New Product',
            state: 'products.new-product'
        }];

        $scope.products = {};

        ProductFactory.getAllProducts()
          .success(function(products){
            $scope.products = products;
          })
    });