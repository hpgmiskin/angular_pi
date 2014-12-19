app.provider('LightsProvider', function(){
  this.$get = ['$resource', function($resource) {
    var LightsProvider = $resource('/lights/:lightID',{},{
      update: {
        method: 'PUT'
      }
    });

    return LightsProvider
  }];
});