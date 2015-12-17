'use strict';
// Controller
app.controller('ActivityController', ['$scope', '$http', 'activities', function($scope, $http, activities) {
  
		$http.get('../data/test.json').then(function (response) {
			$scope.data = response.data;
			console.log($scope.data);
		});
	
	
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
