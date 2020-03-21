(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      foundMenuItems: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}


function FoundItemsDirectiveController() {
  var menu = this;

}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.searchTerm;
  menu.found;

  menu.matchedMenuItems = function (searchTerm) {
    if (searchTerm){
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

      promise.then(function (response) {
        menu.found = response;
      })
      .catch(function (error) {
        console.log(error);
      })
    } 
    else {
      menu.found = [];
    }
  };

  menu.removeItem = function (itemIndex) {
    menu.found.splice(itemIndex, 1);
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      // process result and only keep items that match
      var foundItems = result.data.menu_items.filter(
        x => x.description.toLowerCase().includes(searchTerm.toLowerCase()));


      console.log("Search Term: " + searchTerm);
      console.log(foundItems);

      // return processed items
      return foundItems;
    });
  };

}

})();
