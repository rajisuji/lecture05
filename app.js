(function(){
'use strict';
angular.module('nameCalc', [])
.controller('nameCalcController', function ($scope){
$scope.name = "";
$scope.totVal = 0;
$scope.sayHello = function(){
    var tot = calNumericstring($scope.name);
    $scope.totVal = tot;
};
function calNumericstring(str){
    var totgh = 0;
    for(var i=0; i < str.length; i++){
        totgh += str.charCodeAt(i);
    }
    return totgh;
}
});
})();
