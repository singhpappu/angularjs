app.controller('myAppCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.services = services;
    console.log($scope.services);
});