'use strict';

/**
 * @ngdoc function
 * @name angularGithubTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGithubTestApp
 */
angular.module('angularGithubTestApp').controller('MainCtrl', ['$scope',
  'aboutResolve',
  function($scope, aboutResolve) {
    if (aboutResolve) {
      $scope.angularWorks = aboutResolve;
    }

}]);
