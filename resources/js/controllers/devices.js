app.controller("DevicesController", ["$scope","DevicesProvider",function($scope,DevicesProvider){

  $scope.owners = [
    {id: "henry", name: "Henry", panelClass: "col-xs-12 col-sm-6 col-md-4", buttonClass:"col-xs-12 col-sm-12 col-md-12"},
    {id: "ilan", name: "Ilan", panelClass: "col-xs-12 col-sm-6 col-md-4", buttonClass:"col-xs-12 col-sm-12 col-md-12"},
    {id: "steve", name: "Steve", panelClass: "col-xs-12 col-sm-6 col-md-4", buttonClass:"col-xs-12 col-sm-12 col-md-12"},
    {id: "other", name: "Other", panelClass: "col-xs-12 col-sm-12 col-md-12", buttonClass:"col-xs-12 col-sm-6 col-md-4"}
  ];

  $scope.devices = DevicesProvider.query();

  function deviceSelector(){

    this.selectedDevice = null;
    this.deviceSelected = false;

    this.selectDevice = function(device){
      if (this.selectedDevice == device){
        device = null;
      }

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

    this.getClass = function(device){
      if (device == this.selectedDevice){
        return "btn-primary";
      } else {
        return "btn-default";
      }
    }

  };

  $scope.deviceSelector = new deviceSelector();

}]);