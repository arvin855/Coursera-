(function (){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){

    $scope.text = "";
    $scope.result;

    $scope.count = function () {
      var totalvalue = calculatCountInString($scope.text);
      $scope.result = totalvalue;
    };

    function calculatCountInString(string) {
      var words = string.split(',');
      var eleCount = 0;
      for (var i = 0; i < words.length; i++) {
        if(words[i] != 0){
          eleCount ++;
        }
      }
      return eleCount;
    }
  }



})();
