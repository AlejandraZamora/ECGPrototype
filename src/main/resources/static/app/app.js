'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.Login',
  'myApp.MainPage',
  'myApp.version',
  'myApp.template',
  'myApp.SecondPage',
  'services.factory'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/Login'});
}]);

