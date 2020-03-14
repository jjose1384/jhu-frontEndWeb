(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.filter('customCurrency', customCurrencyFilter);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyController = this;

  toBuyController.items = 
    ShoppingListCheckOffService.getToBuyList();

  toBuyController.checkOffItem = function (itemIndex) {
    ShoppingListCheckOffService.checkOffItem(itemIndex);
  };
}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtController = this;

  alreadyBoughtController.items = 
    ShoppingListCheckOffService.getAlreadyBoughtList();

}


function ShoppingListCheckOffService() {
  var service = this;

  var toBuyList = [{name: "cookies", quantity: 10, pricePerItem: 5},
                   {name: "chips", quantity: 5, pricePerItem: 3},
                   {name: "soda", quantity: 2, pricePerItem: 10},
                   {name: "popcorn", quantity: 2, pricePerItem: 6},
                   {name: "pizza", quantity: 3, pricePerItem: 20}];
  var alreadyBoughtList = [];

  service.checkOffItem = function (itemIndex) {
    var item = toBuyList[itemIndex];

    // remove from toBuyList
    toBuyList.splice(itemIndex, 1);

    // add to alreadyBoughtList
    alreadyBoughtList.push(item);
  };

  service.getToBuyList = function () {
    return toBuyList;
  };

  service.getAlreadyBoughtList = function () {
    return alreadyBoughtList;
  };
}

function customCurrencyFilter() {
  return function (input) {
    return "$$$" + input + ".00";
  }
}

})();
