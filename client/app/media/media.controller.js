'use strict';

angular.module('yogurtCultureApp')
    .controller('MediaCtrl', function($scope, $http, $upload) {

        $scope.allImages = {};
        $scope.productImages = {};
        $scope.selectedImages = {};

        $http.get('/api/images').success(function(data) {
            $scope.images = data;
        });

        $scope.saveImagesToProduct = function(product_id) {
            $http.put('/api/products/addImages/' + product_id, $scope.selectedImages)
                .success(function(product) {
                    $scope.product = product;
                });
        };

        $scope.onFileSelect = function($files) {
            //$files: an array of files selected, each file has name, size, and type.
            for (var i = 0; i < $files.length; i++) {
                var file = $files[i];
                $scope.upload = $upload.upload({
                    url: 'api/images',
                    data: {
                        myObj: $scope.myModelObj
                    },
                    file: file,
                }).progress(function(evt) {
                    console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
                }).success(function(data, status, headers, config) {
                    // file is uploaded successfully
                    $scope.images = data;
                });
            }

        };

        $scope.removeImage = function(image_id) {

            $http.delete('/api/images/' + image_id).success(function() {
                if (image_id in $scope.selectedImages) {
                    delete $scope.selectedImages[image_id];
                }
                $http.get('/api/images').success(function(images) {
                    $scope.images = images;
                });
            });
        };
    });