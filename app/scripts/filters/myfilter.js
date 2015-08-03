'use strict';

/**
 * @ngdoc filter
 * @name angularAppApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the angularAppApp.
 */
angular.module('angularAppApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
