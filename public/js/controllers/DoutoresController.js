/**
 * Created by estacao01 on 11/05/15.
 */
angular.module('qualdoutor').controller('DoutoresController',
function($scope) {
    $scope.total = 0;
    $scope.incrementa = function() {
        $scope.total++;
    };
});