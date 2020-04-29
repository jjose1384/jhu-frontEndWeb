(function () {
"use strict";

angular.module('public')
.directive('validate', Validate);

Validate.$inject = ['MyinfoService', '$q'];
function Validate(MyinfoService, $q) {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$asyncValidators.validate = function (shortName) {
                return MyinfoService.getMenuItem(shortName)
  					.then(function (response) {
		  				ctrl.$setValidity('validate', true);
                        console.log(response);
	                    return true;	
			    	}, 
			    	function (data) {
			    		ctrl.$setValidity('validate', false);
                        console.log(data);
                    	return $q.reject();
			    	});

            };
        }
    };
}

})();