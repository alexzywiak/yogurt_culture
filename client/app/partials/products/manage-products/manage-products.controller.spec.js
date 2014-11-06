'use strict';

describe('Controller: ManageProductsCtrl', function () {

  // load the controller's module
  beforeEach(module('yogurtCultureApp'));

  var ManageProductsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManageProductsCtrl = $controller('ManageProductsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
