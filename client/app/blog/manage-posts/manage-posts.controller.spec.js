'use strict';

describe('Controller: ManagePostsCtrl', function () {

  // load the controller's module
  beforeEach(module('yogurtCultureApp'));

  var ManagePostsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagePostsCtrl = $controller('ManagePostsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
