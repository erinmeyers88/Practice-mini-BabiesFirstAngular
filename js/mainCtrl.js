var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){

$scope.friends = ["Daniel", "Hilary", "Erica", "Sam", "Amy"];

$scope.addFriend = function () {
	$scope.friends.push($scope.newFriend);
};

});