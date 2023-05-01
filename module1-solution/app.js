(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.log = function () {
      var lunch = $scope.lunch;
      var lunchList = lunch.replace(/\s/g,'').split(',').filter(n => n);
      if(lunchList.length!=0){
        if(lunchList.length>3){
          $scope.message = "Too much!";
        }
        else{
          $scope.message = "Enjoy!";
        }
      }
      else{
        $scope.message = "Please enter data first";
      }
    }
  }

})();
