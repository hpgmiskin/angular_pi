app.controller("DevicesController", ["$scope","DevicesProvider",function($scope,DevicesProvider){

  $scope.owners = [
    {id: "henry", name: "Henry"},
    {id: "ilan", name: "Ilan"},
    {id: "steve", name: "Steve"}
  ];

  $scope.devices = DevicesProvider.query();

  function deviceSelector(){

    this.selectedDevice = null;
    this.deviceSelected = false;

    this.selectDevice = function(device){
      this.selectedDevice = device;

      if (device != null){
        this.deviceSelected = true;
      } else {
        this.deviceSelected = false;
      }
    }

    this.setOwner = function(owner){
      if (this.deviceSelected){
        this.selectedDevice.owner = owner;
        DevicesProvider.update({deviceMAC: this.selectedDevice.mac}, this.selectedDevice);
        this.selectDevice(null);
      } else {
        alert("No device selected");
      }
    }

    this.getDeviceSelected = function(){
      return this.deviceSelected;
    }

  };

  $scope.deviceSelector = new deviceSelector();

  $scope.getClass = function(owner){
    if (owner == "henry"){
      return "btn-primary"
    } else if (owner == "ilan"){
      return "btn-secondary"
    } else if (owner == "steve"){
      return "btn-danger"
    } else if (owner == "unkown"){
      return "btn-danger"
    } else {
      return "btn-default"
    }
  };

}]);