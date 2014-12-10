app.service("DevicesService",['$resource',function($resource){


}]);

app.provider('DevicesProvider', function(){
  this.$get = ['$resource', function($resource) {
    var DevicesProvider = $resource('/devices/:deviceID',{},{
      update: {
        method: 'PUT'
      }
    });

    return DevicesProvider
  }];
});