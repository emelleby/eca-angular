'use strict';
// Controller

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	
  $scope.title = 'Fixed + Fluid Bootstrap Template with Off-canvas Sidebar';
	
	$http.get('../data/test.json').then(function (response) {
			$scope.data = response.data;
			console.log($scope.data);
		})
	
		$scope.categories = {
			roles: []
	  	};

	  $scope.checkAll = function() {
		  angular.forEach($scope.results, function(value, key) {
			  this.push($scope.results[key].category);
			}, $scope.categories.roles);
		  
		//$scope.categories.roles = angular.copy($scope.categories.roles);
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
		 console.log($scope.results[0].category);
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
  
}]);
