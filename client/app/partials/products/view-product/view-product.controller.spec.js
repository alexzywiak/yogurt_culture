'use strict';

describe('Controller: ViewProductCtrl', function () {

  // load the controller's module
  beforeEach(module('yogurtCultureApp'));

  var ViewProductCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewProductCtrl = $controller('ViewProductCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
