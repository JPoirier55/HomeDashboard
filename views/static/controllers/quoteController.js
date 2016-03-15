/**
 * Created by Jake on 3/14/2016.
 */
app.controller('quoteController', function($scope, $http){
    $http.get('api/v1/quotes')
        .then(function(response) {
            $scope.quote = getRandomQuote(response);
        });
});

function getRandomQuote(quoteArr, callback){
    var jsonDoc = quoteArr.data[0].quotes;
    var randNum = Math.floor((Math.random() * 24) + 1);
    return jsonDoc[randNum];
}