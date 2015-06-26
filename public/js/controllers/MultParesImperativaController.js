angular.module('multPares').controller('MultParesImperativaController',
    function($scope) {
        var numeros = [1,2,3,4,5,6];
        var resultado = 1;

        numeros.forEach(function(n){
            if(n % 2 === 0){
                resultado *= n;
            }
        });

        $scope.resultado = resultado;
        console.log("Resultado: " + resultado);
        // Resultado: 48
    });