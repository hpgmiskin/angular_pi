app.provider('GoProProvider', function(){
  this.$get = ['$resource', function($resource) {
    var GoProProvider = $resource('/gopro/:photoID',{},{
      update: {
        method: 'PUT'
      }
    });

    return GoProProvider
  }];
});