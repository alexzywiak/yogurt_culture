'use strict';

angular.module('yogurtCultureApp')
    .factory('ImageFactory', function($http) {
        var exports = {};

        exports.getImagesFromIdArray = function(imageIdArray) {
            return $http.post('/api/images/imageArray', {
                'images': imageIdArray
            });
        };

        return exports;
    });