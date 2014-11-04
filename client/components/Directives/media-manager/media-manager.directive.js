'use strict';

angular.module('yogurtCultureApp')

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