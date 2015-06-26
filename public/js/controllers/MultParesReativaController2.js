/**
 * Created by estacao01 on 07/06/15.
 */
angular.module('multPares', ['rx']).controller('MultParesReativaController',
    function($scope, rx) {
        var numeros = [1,2,3,4,5,6];
        $scope.resultado = 0;
        var resultado = numeros
            .filter(function(n){ return n % 2 ===0; })
            .reduce(function(calc, n){
                return calc * n;
            });


        rx.Observable.fromArray([10, 20, 30])
            .map(function(value){ return value * 2; })
            .reduce(function(acc, value){ return acc + value; })
            .subscribe(function(value){
                console.log(value);
            });
        // Resultado final: 48
    });