'use strict';

describe('Controller: EditPostsCtrl', function () {

  // load the controller's module
  beforeEach(module('yogurtCultureApp'));

  var EditPostsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditPostsCtrl = $controller('EditPostsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
