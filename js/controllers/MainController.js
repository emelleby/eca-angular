'use strict';
// Controller

app.controller('MainController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
	
  $scope.title = 'Fixed + Fluid Bootstrap Template with Off-canvas Sidebar';
	
	$http.get('../data/test.json').then(function (response) {
			$scope.data = response.data;
			//console.log($scope.data);
		})
		$scope.filText2 = [];
	
		$scope.categories = {
			roles: []
	  	};
	
	$scope.$watch(function () {
		// $scope.filText2 = angular.copy($scope.categories.roles);	
		// code here
		// if (category in in categories array)
		//	show item
		
		//else
			// hide item
			});

	 $scope.checkAll = function() {
		  $scope.categories.roles = [];
		  angular.forEach($scope.results, function(value, key) {
			  this.push($scope.results[key].category);
			}, $scope.categories.roles);
		  
		// $scope.kategori = angular.copy($scope.categories.roles);
		//$scope.categories.roles.push('Arts');
	  };
	
	  $scope.uncheckAll = function() {
		$scope.categories.roles = [];
	  };

	  $scope.checkFirst = function() {
		$scope.categories.roles.splice(0, $scope.categories.roles.length); 
		$scope.categories.roles.push('guest');
	  };
	
	 $scope.log = function() {
		console.log($scope.categories.roles);
		 console.log($scope.data);
	angular.copy($scope.categories.roles, $scope.filText2);
		 console.log($scope.results);
		 console.log($scope.filtText2);
	  };
	
	// Tabs from activitycontroller
	
                  $scope.tab = 1;

                  $scope.filtText = 'monday';

                  $scope.select = function(setTab) {
                    $scope.tab = setTab;
                    
                    if (setTab === 2) {
                      $scope.filtText = "tuesday";
                    }
                    else if (setTab === 3) {
                      $scope.filtText = "wednesday";
                    }
                    else if (setTab === 4) {
                      $scope.filtText = "thursday";
                    }
					  else if (setTab === 5) {
                      $scope.filtText = "friday";
                    }
                    else {
                      $scope.filtText = "monday";
                    }
                  };

                  $scope.isSelected = function (checkTab) {
                    return ($scope.tab === checkTab);
                  };

                  $scope.showDetails = false;
                  $scope.toggleDetails = function() {
                  $scope.showDetails = !$scope.showDetails;
                };
	
	
		$scope.$watch(function () {
			$scope.results = $scope.$eval("data.ecas | unique: 'category'");
			});
	
		var promise = $timeout(function () {
			angular.forEach($scope.results, function(value, key) {
				  this.push($scope.results[key].category);
					}, $scope.categories.roles);
			
		}, 1000);
			  
		
  
}]);
