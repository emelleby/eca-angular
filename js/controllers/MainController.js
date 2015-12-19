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
		$scope.myEcas = [];
	
						
		// add Eca to the array of MyEca if it exists remove it.
		$scope.addEca = function (item, list) {
			var idx = list.indexOf(item);
			if (idx > -1) list.splice(idx, 1);
			else list.push(item);
			// console.log(item);
		  };
	
		// add filter to the selected list/array
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
	
	 $scope.uncheckAll = function() {
		$scope.selected = [];
	  };

	 $scope.checkAll = function() {
		  $scope.selected = [];
		  angular.forEach($scope.results, function(value, key) {
			  this.push($scope.results[key].category);
			}, $scope.selected);
	  };
	
	 
	 $scope.log = function() {
		 console.log($scope.selected);
		 console.log($scope.data);
		 console.log($scope.results);
		 console.log($scope.cost);
	  };
	
	/* Tabs from material design ecaPanel2
	selected = null,
    previous = null;
	
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
      previous = selected;
      selected = tabs[current];
      if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
      if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
    });
    
	*/
	// Tabs from Bootstrap
	
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
	
	              $scope.toggleModel = function(id) {
                  	$scope.toggleModel.id = !$scope.toggleModel.id;
					  console.log($scope.toggleModel.id);
                };

                  $scope.showDetails = false;
                  $scope.toggleDetails = function() {
                  $scope.showDetails = !$scope.showDetails;
					  console.log($scope.showDetails);
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