app.controller("DevicesController", ["$scope","DevicesProvider","DevicesService",function($scope,DevicesProvider,DevicesService){

  function ShowDevices(){

    this.show = false;

    this.showButton = function(){
      return !this.show;
    }

    this.showUpdateButton = function(){
      if (this.show){
        return !$scope.deviceSelector.getDeviceSelected();
      } else {
        return false;
      }
    }

    this.showDevices = function(){
      return this.show;
    }

    this.updateDevices = function(){
      $scope.devices = DevicesProvider.query();
    }

    this.toggleDevices = function(){
      this.show = !this.show;
      if (this.show){
        $scope.owners = DevicesService.getOwners();
        $scope.devices = DevicesProvider.query();
      }
    }
  }


  function DeviceSelector(){

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

  $scope.showDevices = new ShowDevices();
  $scope.deviceSelector = new DeviceSelector();

}]);