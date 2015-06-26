/**
 * Created by MayconEuzebio on 20/05/15.
 */
angular.module('moveJogos').controller('MoveJogosReativoController',
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

        function irParatras (){
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

        var source = Rx.Observable.empty();
        $scope.eventos = {};
        $scope.eventos.action = false;
        $scope.eventos.teclado = function(event){

            source.filter(isKey(event, _direita)).subscribe(irParaDireita);
            source.filter(isKey(event, _frente)).subscribe(irParaFrente);
        };

        $scope.eventos.mouse = function(event){
            /*source.filter(isKey(event, _frente)).subscribe(irParaFrente());
            source.filter(isKey(event, _direita)).subscribe(irParaDireita());*/
        };

        function isKey (event, keyCode){
            return event.keyCode === keyCode;
        }

        /*var x = isKey(_frente);
        console.log(x);
        $scope.eventos.teclado.filter(isKey(_frente)).subscribe(irParaFrente());
        $scope.eventos.teclado.filter(isKey(_direita)).subscribe(irParaFrente());*/
        //source.filter(isKey(_frente)).subscribe(irParaFrente());
        //source.filter(isKey(_direita)).subscribe(irParaDireita());
        /*source.filter(isKey(JUMP)).subscribe(jump);
        source.filter(isKey(CROUCH)).subscribe(crouch);
        source.filter(isKey(LEFT)).subscribe(goLeft);
        source.filter(isKey(RIGHT)).subscribe(goRight);*/

    });