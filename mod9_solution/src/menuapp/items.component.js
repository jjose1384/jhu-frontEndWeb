(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/templates/shoppinglist.template.html',
  bindings: {
    items: '<'
  }
});

})();
