(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['MyinfoService', 'ApiPath'];
function MyinfoController(MyinfoService, ApiPath) {
  var $ctrl = this;
  $ctrl.myinfo = MyinfoService.getMyinfo();

  $ctrl.getBasePath = function(){
  	return ApiPath;
  };
}


})();