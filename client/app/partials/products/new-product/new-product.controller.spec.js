'use strict';

describe('Controller: NewProductCtrl', function () {

  // load the controller's module
  beforeEach(module('yogurtCultureApp'));

  var NewProductCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewProductCtrl = $controller('NewProductCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
