'use strict';

describe('Service: PostFactory', function () {

  // load the service's module
  beforeEach(module('yogurtCultureApp'));

  // instantiate service
  var PostFactory;
  beforeEach(inject(function (_PostFactory_) {
    PostFactory = _PostFactory_;
  }));

  it('should do something', function () {
    expect(!!PostFactory).toBe(true);
  });

});
