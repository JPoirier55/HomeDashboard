/**
 * Created by Jake on 3/13/2016.
 */

app.controller('weatherController', function($scope, $http){
    $http.get('api/v1/w')
        .then(function(response) {
            $scope.data = response;
       });

 
});

