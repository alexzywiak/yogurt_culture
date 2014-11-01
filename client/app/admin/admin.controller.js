'use strict';

angular.module('yogurtCultureApp')
    .controller('AdminCtrl', function($scope, $http, Auth, User) {

        $scope.sidebarMenu = [
        {
            title: 'Blog',
            state:'admin.blog'
        },
        {
            title: 'Products',
            state: 'admin.products'
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