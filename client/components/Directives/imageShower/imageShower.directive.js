'use strict';

angular.module('yogurtCultureApp')
    .directive('imageShower', function() {
        return {
            restrict: 'EA',
            scope: {
                current: '@',
            },
            link:function($scope, $el, $attr){
                $scope.images = [];
                $attr.$observe('current', function(){
                    if($attr.current.length > 0){
                        $scope.images = $attr.current;
                        console.log($scope.images);
                    }
                });
            },  
            templateUrl: 'components/Directives/imageShower/imageShower.html',
        };
    });