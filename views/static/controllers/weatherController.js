/**
 * Created by Jake on 3/13/2016.
 */

app.controller('weatherController', function($scope, $http){
    $http.get('api/v1/weather')
        .then(function(response) {
            var json = parseWeatherJson(response);
            $scope.currently = json[0];
            $scope.alerts = json[2];
            $scope.daily = json[1];
       });

 
});

function parseWeatherJson(weatherJson, callback){
    var jsonDoc = weatherJson;
    var currently = jsonDoc.data.currently;
    var daily = jsonDoc.data.daily.data;

    var weekDays = ['Sun','Mon', 'Tues','Wed','Thurs', 'Fri', 'Sat'];
    daily.splice(7, 1);
    for(index in weekDays){
        daily[index]['dayname'] = weekDays[index];
    }
    var alerts = jsonDoc.data.alerts;
    return [currently, daily, alerts];
}