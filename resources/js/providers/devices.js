app.provider('DevicesProvider', function(){
  this.$get = ['$resource', function($resource) {
    var DevicesProvider = $resource('/devices/:deviceMAC',{},{
      update: {
        method: 'PUT'
      }
    });

    return DevicesProvider
  }];
});