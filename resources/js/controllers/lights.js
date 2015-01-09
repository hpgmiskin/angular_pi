app.controller("LightsController", ["$scope","$interval","LightsProvider",function($scope,$interval,LightsProvider){

    $scope.lights = LightsProvider.query();

    $scope.switch = function(light) {
      $scope.light = light;
      $scope.light.state = !$scope.light.state;
      LightsProvider.update({lightID: $scope.light.id}, $scope.light);
    };

    $scope.getClass = function(state){
    	if (state){
    	    return 'btn-primary';
    	} else {
    	    return 'btn-default';
    	}
    };

    $scope.updateLights = function(){
      console.log("Checking lights for changes");

      LightsProvider.query()
        .$promise.then(function(lights){
          for (i = 0; i < $scope.lights.length; i++){
            if ($scope.lights[i].state != lights[i].state){
              console.log(lights[i].name,lights[i].state);
              $scope.lights[i].state = lights[i].state;
            };
          };
        });
    };

    var seconds = 1
    $interval($scope.updateLights,1000*seconds);

}]);