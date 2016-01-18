var app = angular.module('handleGenerator', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
    $scope.handles = [];

    function retrieve() {
        $http.get('/nouns').then(function (response) {
            $scope.nouns = response.data.nouns;
            shuffle($scope.nouns);
        });
        $http.get('/adjectives').then(function (response) {
            $scope.adjectives = response.data.adjectives;
            shuffle($scope.adjectives);
        });
    }

    $scope.combine = function() {
        for (var i = 0; i < $scope.nouns.length; i++) {
            $scope.handles[i] = $scope.adjectives[i] + $scope.nouns[i];
        }
    };

    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    retrieve();

}]);