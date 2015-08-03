'use strict';

/**
 * @ngdoc directive
 * @name angularAppApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('angularAppApp')
  .directive('myDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myDirective directive');
      }
    };
  });

/**
 * @ngdoc directive
 * @name angularAppApp.directive:myDirective1
 * @element textarea
 * @function
 *
 * @description
 * Resize textarea automatically to the size of its text content.
 *
 * **Note:** ie<9 needs polyfill for window.getComputedStyle
 *
 * @example
 <example module="rfx">
 <file name="index.html">
 <textarea ng-model="text"rx-autogrow class="input-block-level"></textarea>
 <pre>{{text}}</pre>
 </file>
 </example>
 */
angular.module('angularAppApp')
  .directive('rAutogrow', function () {
    //some nice code
  });
