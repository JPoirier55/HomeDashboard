/**
 * Created by Jake on 3/15/2016.
 */
app.controller('pinsController', function($scope, $http){
    $http.get('api/v1/pins')
        .then(function(response) {
            $scope.pin = getRecentPin(response);
        });
});

function getRecentPin(pins, callback){
    return pins.data.data[0];
}