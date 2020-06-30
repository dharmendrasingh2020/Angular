( function(){
    'use strict';
    angular.module('NameCalculator',[])
    .controller('NameCalculatorController', function ($scope)
    {

       $scope.name =" ";
        $scope.totalValue = 0;
        $scope.displayNeumeric =funtion()
        {
            var totalNameValue= calculatNumericForString($scope.name);
            $scope.totalValue= totalNameValue;
        };

             funtion calculatNumericForString(sting)
             {
            var totalStringValue= 0;
            for (var i=0;i < String.length; i++){
                totalStringValue += String.charCpdeAt(i);

            }
return totalStringValue;
        }
        
    });

})();
 