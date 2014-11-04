'use strict';

angular.module('yogurtCultureApp')
    .controller('AdminCtrl', function($scope, $http, Auth, User) {

        $scope.sidebarMenu = [{
            title: 'Blog',
            state: 'admin.blog',
            submenu: [{
                title: 'Manage Posts',
                state: 'admin.blog.manage-posts',
            },
            {
                title: 'Add New Post',
                state: 'admin.blog.new-post',
            }]
        }, {
            title: 'Products',
            state: 'admin.products',
            submenu: [
            {
                title: 'Manage Products',
                state: 'admin.products.manage-products',
            },
            {
                title: 'New Product',
                state: 'admin.products.new-product',
            }]
        }];
        // Use the User $resource to fetch all users
        $scope.users = User.query();

        $scope.delete = function(user) {
            User.remove({
                id: user._id
            });
            angular.forEach($scope.users, function(u, i) {
                if (u === user) {
                    $scope.users.splice(i, 1);
                }
            });
        };
    });