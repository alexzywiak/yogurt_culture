'use strict';

angular.module('yogurtCultureApp')
    .controller('ImageViewerCtrl', function($scope) {

        $scope.setImage = function(imgUrl) {
            $scope.mainImageUrl = imgUrl;
        };
    });