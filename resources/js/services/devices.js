app.service("DevicesService",function(){

	this.owners = [
    {id: "henry", name: "Henry", panelClass: "col-xs-12 col-sm-6 col-md-4", buttonClass:"col-xs-12 col-sm-12 col-md-12"},
    {id: "ilan", name: "Ilan", panelClass: "col-xs-12 col-sm-6 col-md-4", buttonClass:"col-xs-12 col-sm-12 col-md-12"},
    {id: "steve", name: "Steve", panelClass: "col-xs-12 col-sm-6 col-md-4", buttonClass:"col-xs-12 col-sm-12 col-md-12"},
    {id: "other", name: "Other", panelClass: "col-xs-12 col-sm-12 col-md-12", buttonClass:"col-xs-12 col-sm-6 col-md-4"}
  ];

	this.getOwners = function(){
		return this.owners
	};

});