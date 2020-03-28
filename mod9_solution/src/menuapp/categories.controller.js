(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['categoriesList'];
function CategoriesController(categoriesList) {
  var categories = this;
  categories.items = categoriesList.data;
  console.log(categories.items);
}

})();
