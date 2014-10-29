'use strict';

angular.module('yogurtCultureApp')
    .controller('NavbarCtrl', function($scope, $location, Auth) {
        $scope.menu = [{
            'title': 'Home',
            'link': '/'
        }, {
            'title': 'About',
            'link': '/about'
        },
        {
            'title': 'Manage Products',
            'link': '/manage-products'
        }, {
            'title' : 'Media',
            'link' : '/media'
        }];

        $scope.isCollapsed = true;
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.logout = function() {
            Auth.logout();
            $location.path('/login');
        };

        $scope.isActive = function(route) {
            return route === $location.path();
        };
    });