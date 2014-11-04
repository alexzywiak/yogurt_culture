'use strict';

angular.module('yogurtCultureApp')
    .controller('ImageShowerCtrl', function($scope) {
      $scope.setImage = function(image){
        $scope.mainImage = image;
      };
    })
    .directive('imageShower', function() {
        return {
            templateUrl: 'components/Directives/imageShower/imageShower.html',
            restrict: 'EA',
            scope: {
                images: '=',
                mainImage: '='
            },
            controller: 'ImageShowerCtrl'
        };
    });