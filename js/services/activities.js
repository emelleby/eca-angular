app.factory('activities', ['$http', function($http) {
  return $http.get('../data/test.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
