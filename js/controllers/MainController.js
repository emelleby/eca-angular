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
		$scope.categories.roles = angular.copy($scope.roles);
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
	  };
  
}]);
