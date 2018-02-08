'use strict';

/**
 * @ngdoc overview
 * @name angularGithubTestApp
 * @description
 * # angularGithubTestApp
 *
 * Main module of the application.
 */
angular.module('angularGithubTestApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]).config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  }).when('/about', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main',
    resolve:{
      aboutResolve:function(){ return 101;}
    }
  }).otherwise({redirectTo: '/'});
});
