'use strict';

describe('Directive: sidebarMenu', function () {

  // load the directive's module and view
  beforeEach(module('yogurtCultureApp'));
  beforeEach(module('components/sidebarMenu/sidebarMenu.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sidebar-menu></sidebar-menu>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the sidebarMenu directive');
  }));
});