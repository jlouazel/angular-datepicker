/*global angular*/

(function(angular) {
	'use strict';

	var app = angular.module('720kb', [
		'ngRoute',
		'720kb.datepicker'
	])

	app.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['$scope'];

	function MainCtrl($scope) {
		$scope.dateUpdated = dateUpdated;

		function dateUpdated(date) {
			console.log('Date:', date);
			return date;
		}
	}
}(angular));
