(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://jjose1384-jhufrontendweb.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
