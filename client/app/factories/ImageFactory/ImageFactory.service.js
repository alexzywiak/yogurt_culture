'use strict';

angular.module('yogurtCultureApp')
    .factory('ImageFactory', function($http) {
        var exports = {};

        exports.getAllImages = function(){
          return $http.get('/api/images');
        };

        exports.getImagesFromIdArray = function(imageIdArray) {
            return $http.post('/api/images/imageArray', {
                'images': imageIdArray
            });
        };

        return exports;
    });