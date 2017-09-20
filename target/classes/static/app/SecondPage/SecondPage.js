'use strict';

angular.module('myApp.SecondPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/SecondPage', {
    templateUrl: 'SecondPage/SecondPage.html',
    controller: 'SecondPageCtrl'
  });
}])

.controller('SecondPageCtrl', ['$rootScope', '$scope', 'persona','personas','$http','$resource', '$location', function ($rootScope, $scope, persona, personas, $http, $resource, $location) {

    var dps = []; // dataPoints
    var chart = new CanvasJS.Chart("chartContainer",{
        title :{
            text: "ECG Signal"
        },
        data: [{
            type: "line",
            dataPoints: dps
        }]
    });

		var yVal = 990;
		var xVal=0;
		var updateInterval = 0.25;
		var dataLength = 500; // number of dataPoints visible at any point
        var stop=0;
		var updateChart = function (count) {
            if(stop!=4000){
                count = count||1;
                for (var j = 0; j < count; j++) {
                    stop++;
                    yVal = parseInt($rootScope.dataNew[stop]);
                    dps.push({
                        x: xVal,
                        y: yVal
                    });
                    xVal=xVal+0.25;
                };
                if (dps.length > dataLength)
                {
                    dps.shift();
                }
                chart.render();

            }
		};

		// generates first set of dataPoints
		updateChart(dataLength);
        // update chart after specified time.
        setInterval(function(){updateChart()}, updateInterval);


}]);
