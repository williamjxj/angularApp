'use strict';

describe('Service: myProvider', function () {

  // instantiate service
  var myProvider,
    init = function () {
      inject(function (_myProvider_) {
        myProvider = _myProvider_;
      });
    };

  // load the service's module
  beforeEach(module('angularAppApp'));

  it('should do something', function () {
    init();

    expect(!!myProvider).toBe(true);
  });

  it('should be configurable', function () {
    module(function (myProviderProvider) {
      myProviderProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(myProvider.greet()).toEqual('Lorem ipsum');
  });

});
