/**
 * Created by MayconEuzebio on 20/05/15.
 */
angular.module('moveJogos').controller('MoveJogosImperativoController',
    function($scope){
        var _frente      = 87, /* tecla w */
            _direita     = 68, /* tecla a */
            _esquerda    = 65, /* tecla d */
            _tras        = 83, /* tecla s */
            _interagir   = 32, /* tecla back space */
            _acionarArma = 1,  /* botão esquerdo do mouse */
            _trocarArma  = 2;  /* botão direito do mouse */

        function irParaFrente (){
            $scope.movimento = 'Mover para frente ...';
        }

        function irParaDireita (){
            $scope.movimento = 'Mover para direita ...';
        }

        function irParaEsquerda (){
            $scope.movimento = 'Mover para esquerda ...';
        }

        function irParaTras (){
            $scope.movimento = 'Mover para trás ...';
        }

        function interagir (){
            $scope.movimento = 'Interagir ...';
        }

        function acionarArma (){
            $scope.movimento = 'Acionar arma ...';
        }

        function trocarArma (){
            $scope.movimento = 'Trocar de arma ...';
        }

        $scope.eventos = {};
        $scope.eventos.teclado = function(event){
            switch(event.keyCode){
                case _frente        : irParaFrente();
                    break;
                case _direita       : irParaDireita();
                    break;
                case _esquerda      : irParaEsquerda();
                    break;
                case _tras          : irParaTras();
                    break;
                case _interagir     : interagir();
                    break;
            }
        };

        $scope.eventos.mouse = function(event){
            switch(event.buttons){
                case _acionarArma   : acionarArma();
                    break;
                case _trocarArma    : trocarArma();
                    break;
            }
        };
    });