'use strict';

angular.module('yogurtCultureApp')
  .controller('EditProductCtrl', function ($scope, $http, $stateParams, FileUploader) {
    
    $scope.product = {};
    $scope.updated = false;
    $scope._id = $stateParams.productId;

    $scope.uploader = new FileUploader({
      url : '/api/products/photos'
    });

    $http.get('/api/products/manage/' + $scope._id)
      .success(function(data){
        $scope.product = data;
      });

    $scope.updateProduct = function(productId){
      $http.put('/api/products/' + productId, $scope.product)
        .success(function(){
          $scope.updated = true;
        });
    };
  });
