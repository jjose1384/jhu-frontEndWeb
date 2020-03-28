(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['itemsList'];
function ItemsController(itemsList) {
  var menuitems = this;
  menuitems.items = itemsList.data.menu_items;
  console.log(menuitems.items);
}

})();
