'use strict';

describe('Controller: ManageUsersCtrl', function () {

  // load the controller's module
  beforeEach(module('yogurtCultureApp'));

  var ManageUsersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManageUsersCtrl = $controller('ManageUsersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
