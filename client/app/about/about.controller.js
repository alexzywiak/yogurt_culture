'use strict';

angular.module('yogurtCultureApp')
  .controller('AboutCtrl', function ($scope, fileUpload, FileUploader, ImageFactory) {
    
    $scope.images = {};

    var uploader = $scope.uploader = new FileUploader({
      url : '/api/images'
    });

    ImageFactory.getAllImages()
      .success(function(images){
        $scope.images = images;
      });

    uploader.onCompleteAll = function() {
      ImageFactory.getAllImages()
      .success(function(images){
        $scope.images = images;
      });
    };

  });
