'use strict';
// Controller

app.controller('MainController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
	
  $scope.title = 'Fixed + Fluid Bootstrap Template with Off-canvas Sidebar';
	
	$http.get('../data/test.json').then(function (response) {
			$scope.data = response.data;
			//console.log($scope.data);
		})
		$scope.cost = '';
		$scope.free = '';
		$scope.selected = [];
	
		$scope.freeEca = function (handle, varFree) {
			if (handle === varFree){
				return true;
			}
			else
				return false;
		};
		
		$scope.paidEca = function (handle, varPaid) {
			if (handle === varPaid){
				return true;
			}
			else
				return false;
		};
	
	
		 $scope.toggle = function (item, list) {
			var idx = list.indexOf(item.category);
			if (idx > -1) list.splice(idx, 1);
			else list.push(item.category);
		  };

		  $scope.exists = function (item, list) {
			return list.indexOf(item.category) > -1;
		  };
  
		// This one works like a charm filtering for the checkboxes
		$scope.filterCategory = function(item) {
        	return ($scope.selected.indexOf(item.category) !== -1);
    	};  

	 $scope.checkAll = function() {
		  $scope.selected = [];
		  angular.forEach($scope.results, function(value, key) {
			  this.push($scope.results[key].category);
			}, $scope.selected);

	  };
	
	  $scope.uncheckAll = function() {
		$scope.selected = [];
	  };

	
	 $scope.log = function() {
		 console.log($scope.selected);
		 console.log($scope.data);
		 console.log($scope.results);
		 console.log($scope.cost);
	  };
	
	// Tabs from activitycontroller
	
                  $scope.tab = 1;

                  $scope.filtText = 'Monday';

                  $scope.select = function(setTab) {
                    $scope.tab = setTab;
                    
                    if (setTab === 2) {
                      $scope.filtText = "Tuesday";
                    }
                    else if (setTab === 3) {
                      $scope.filtText = "Wednesday";
                    }
                    else if (setTab === 4) {
                      $scope.filtText = "Thursday";
                    }
					  else if (setTab === 5) {
                      $scope.filtText = "Friday";
                    }
                    else {
                      $scope.filtText = "Monday";
                    }
                  };

                  $scope.isSelected = function (checkTab) {
                    return ($scope.tab === checkTab);
                  };

                  $scope.showDetails = false;
                  $scope.toggleDetails = function() {
                  $scope.showDetails = !$scope.showDetails;
                };
	
		
		var promise = $timeout(function () {
			angular.forEach($scope.results, function(value, key) {
				  this.push($scope.results[key].category);
					}, $scope.selected);			
			}, 1000);
			  
$scope.$watch(function () {
			$scope.results = $scope.$eval("data.ecas | unique: 'category'");
			});
  
}]);

/* Filter for doing filtering in the controller with watch
$scope.$watch(function () {
			$scope.results = $scope.$eval("data.ecas | unique: 'category'");
			});
	*/