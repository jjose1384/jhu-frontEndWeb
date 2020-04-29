(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MyinfoService'];
function SignupController(MyinfoService) {
  var $ctrl = this;

  $ctrl.myinfo = MyinfoService.getMyinfo();

  $ctrl.submit = function () {
  	MyinfoService.validateAndSaveMyinfo();
  }
}

})();