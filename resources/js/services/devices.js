app.service("DevicesService",['$resource',function($resource){


}]);

app.provider('DevicesProvider', function(){
  this.$get = ['$resource', function($resource) {
    var DevicesProvider = $resource('//127.0.0.1:80/devices/:deviceID',{},{
      update: {
        method: 'PUT'
      }
    });

    return DevicesProvider
  }];
});