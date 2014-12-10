app.service("LightsService",['$resource',function($resource){


}]);

app.provider('LightsProvider', function(){
  this.$get = ['$resource', function($resource) {
    var LightsProvider = $resource('//127.0.0.1:80/lights/:lightID',{},{
      update: {
        method: 'PUT'
      }
    });

    return LightsProvider
  }];
});