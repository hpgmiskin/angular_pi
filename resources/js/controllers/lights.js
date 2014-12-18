app.controller("LightsController", ["$scope","$interval","LightsProvider",function($scope,$interval,LightsProvider){

    $scope.lights = LightsProvider.query();

    $scope.getClass = function(logic){

	if (logic){
	    return 'btn-primary';
	} else {
	    return 'btn-default';
	}
    }

    var updateLights = function(){
	
	for (i = 0; i < $scope.lights; i++){
	    alert(JSON.stringify($scope.lights[i]));
	    alert(JSON.stringify(lightsProvider.get()));
/*	    if ($scope.lights[i].id == lightQuery[i].id){
		if ($scope.lights[i].state != lightQuery[i].state){
		    $scope.lights[i].state = lightQuery[i].state;
		}
	    }
*/	} 
    }

    $scope.switch = function(light) {
	$scope.light = light;
	$scope.light.state = !$scope.light.state;
	LightsProvider.update({lightID: $scope.light.id}, $scope.light);
    }

    var seconds = 1;
    $interval(updateLights,seconds*1000);

}]);