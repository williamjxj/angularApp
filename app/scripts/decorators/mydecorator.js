'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.decorator:Mydecorator
 * @description
 * # Mydecorator
 * Decorator of the angularAppApp
 */
angular.module('angularAppApp')
  .config(function ($provide) {
    $provide.decorator('myDecorator', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });
  });
