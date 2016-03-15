/**
 * Created by Jake on 3/14/2016.
 */
app.controller('ufcController', function($scope, $http){
    $http.get('api/v1/ufc')
        .then(function(response) {
            $scope.fights = parseUFCJson(response);
        });
});

function parseUFCJson(ufcJson, callback){
    var jsonDoc = ufcJson.data;
    var fightArr = [];
    for(i = 0; i<5; i++){
        fightArr[i] = jsonDoc[i];
    }
    return fightArr;
}