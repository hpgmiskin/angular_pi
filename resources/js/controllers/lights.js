app.controller("LightsController", ["$scope","LightsProvider",function($scope,LightsProvider){
	//$scope.test = LightsService.get();

  $scope.getClass = function(logic){

    if (logic){
      return 'btn-primary';
    } else {
      return 'btn-default';
    }
  }

  $scope.lights = LightsProvider.query();

  $scope.switch = function(light) {
    $scope.light = light;
    $scope.light.state = !$scope.light.state;
    LightsProvider.update({lightID: $scope.light.id}, $scope.light);
  }

}]);