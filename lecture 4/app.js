(function(){
  'use strict';

  angular.module("myFirstApp", [])

  .controller('MyFirstController', function($scope){
    $scope.name="";
    $scope.totalvalue=0;


    $scope.displayvalue = function () {
      var totalNameValue = calculatNumericForString($scope.name);
      $scope.totalvalue = totalNameValue;
    };

    function calculatNumericForString(string) {
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }

      return totalStringValue;
    }
    });

})();
