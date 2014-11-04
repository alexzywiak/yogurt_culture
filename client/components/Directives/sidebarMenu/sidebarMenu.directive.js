'use strict';

angular.module('yogurtCultureApp')
  .directive('sidebarMenu', function () {
    return {
      scope : {
        menu : '='
      },
      templateUrl: 'components/Directives/sidebarMenu/sidebarMenu.html',
      restrict: 'EA',
    };
  });