'use strict';

describe('Directive: imageShower', function () {

  // load the directive's module and view
  beforeEach(module('yogurtCultureApp'));
  beforeEach(module('components/imageShower/imageShower.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<image-shower></image-shower>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the imageShower directive');
  }));
});