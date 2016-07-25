'use strict';

/**
 * @ngdoc function
 * @name portfolio2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolio2App
 */
angular.module('portfolio2App')
  .controller('MainCtrl', function ($scope, $log) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Sitepoint'
    ];

    $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };
  });
