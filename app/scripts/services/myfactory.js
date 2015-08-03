'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.myFactory
 * @description
 * # myFactory
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('myFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
