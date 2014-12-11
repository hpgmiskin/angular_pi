app.controller("GoProController", ["$scope","GoProProvider",function($scope,GoProProvider){

$scope.updateFeed = function(){

GoProProvider.update()
  .$promise.then(function(data){
    alert(data.fullLog);
  });
}

}]);