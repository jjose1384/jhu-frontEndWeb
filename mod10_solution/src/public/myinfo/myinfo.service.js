(function () {
"use strict";

angular.module('common')
.service('MyinfoService', MyinfoService);

MyinfoService.$inject = ['$http', 'ApiPath'];
function MyinfoService($http, ApiPath) {
  var service = this;

  var myinfo = {firstName: "", 
  				lastName: "", 
  				email: "", 
  				phone: "", 
  				favorite: "", 
  				favoriteDetails: {}};

  service.getMyinfo = function () {
    return myinfo;
  };

  service.validateAndSaveMyinfo = function() {
  	 return service.getMenuItem(myinfo.favorite)
    	.then(function (response) {
  			myinfo.favoriteDetails = response.data;
  			myinfo.signedUp = true;
    	}, function (data) {
			myinfo.signedUp = false;
    	});
  };

  service.getMenuItem = function(shortName){
  	return $http.get(ApiPath + '/menu_items/'+shortName.toUpperCase() +'.json');
  };
}

})();