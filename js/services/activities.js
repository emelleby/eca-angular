app.service('activities', function($http) {
	
	 this.getData = function(){
		 
         return $http.get('../data/test.json')
              .success(function(response) {
              // alert();
              console.log(response);
              obj.content = response;
         });

     }
});

	
/*	return $http.get('../data/test.json').success (function(data){
				// $scope.data = data;
				
				console.log(data);
		console.log('data');
		
				return data;
		
			});
}]);

 return $http.get('../data/test.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            }); */
	
			