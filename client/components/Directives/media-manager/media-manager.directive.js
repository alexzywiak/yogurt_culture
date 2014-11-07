'use strict';

angular.module('yogurtCultureApp')
    .controller('MediaCtrl', function($scope, $http, ImageFactory, FileUploader) {

        $scope.images = {};
        $scope.current = {};
        $scope.selectedImages = {};
        $scope.showMediaLibrary = true;

        var uploader = $scope.uploader = new FileUploader({
            url: '/api/images'
        });

        ImageFactory.getAllImages()
            .success(function(images) {
                $scope.images = images;
            });

        uploader.onCompleteAll = function() {
            ImageFactory.getAllImages()
                .success(function(images) {
                    $scope.images = images;
                });
        };

        $scope.saveImagesToCurrent = function(productId, type) {
            var imageArray = [];

            for (var id in $scope.selectedImages) {
                if ($scope.selectedImages[id]) {
                    imageArray.push(id);
                }
            }

            ImageFactory.saveImagesToDb(type, productId, imageArray);
        };

        $scope.removeImage = function(imageId) {

            $http.delete('/api/images/' + imageId).success(function() {
                if (imageId in $scope.selectedImages) {
                    delete $scope.selectedImages[imageId];
                }
                $http.get('/api/images').success(function(images) {
                    $scope.images = images;
                });
            });
        };
    })
    .directive('mediaManager', function() {
        return {
            templateUrl: 'components/Directives/media-manager/media-manager.html',
            restrict: 'EA',
            scope: {
                current: '='
            },
            controller: 'MediaCtrl'
        };
    });