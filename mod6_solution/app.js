(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.lunchDishes = "";
  $scope.message = "";
  $scope.color = "";

  $scope.displayMessage = function () {
    calculateMessage($scope.lunchDishes);
  };


  function calculateMessage(string) {
    var dishLength = string.split(",")
                           .filter(word => word.trim().length > 0)
                           .length;

    console.log("string " + string);
    console.log("dishLength " + dishLength);

    if (dishLength == 0){
      $scope.message = "Please enter data first";
      $scope.color = "red";
    } else if (dishLength > 0 && dishLength < 4){
      $scope.message = "Enjoy!";
      $scope.color = "green";
    } else {
      $scope.message = "Too much!";
      $scope.color = "green";
    }
  }
}

})();
