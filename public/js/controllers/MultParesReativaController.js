/**
 * Created by MayconEuzebio on 17/05/15.
 */
angular.module('multPares').controller('MultParesReativaController',
    function($scope) {
        var numeros = [1,2,3,4,5,6];
        var resultado = numeros
            .filter(function(n){ return n % 2 ===0; })
            .reduce(function(calc, n){
                return calc * n;
            });

        $scope.resultado = resultado;
        console.log("Resultado: " + resultado);
        // Resultado: 48
    });