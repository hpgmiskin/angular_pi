app.controller("DevicesController", ["$scope","DevicesProvider",function($scope,DevicesProvider){

  $scope.devices = DevicesProvider.query();

}]);