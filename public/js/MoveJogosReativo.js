/**
 * Created by MayconEuzebio on 22/05/15.
 */
var _frente      = 87, /* tecla w */
    _direita     = 68, /* tecla a */
    _esquerda    = 65, /* tecla d */
    _tras        = 83, /* tecla s */
    _interagir   = 32, /* tecla back space */
    _acionarArma = 1,  /* botão esquerdo do mouse */
    _trocarArma  = 2;  /* botão direito do mouse */

function exibeMovimento(move){
    document.getElementsByTagName("h2")[0].innerHTML = "Movimento: " + move;
}

function irParaFrente (){
    exibeMovimento('Mover para frente ...');
}

function irParaDireita (){
    exibeMovimento('Mover para direita ...');
}

function irParaEsquerda (){
    exibeMovimento('Mover para esquerda ...');
}

function irParaTras (){
    exibeMovimento('Mover para trás ...');
}

function interagir (){
    exibeMovimento('Interagir ...');
}

function acionarArma (){
    exibeMovimento('Acionar arma ...');
}

function trocarArma (){
    exibeMovimento('Trocar de arma ...');
}

var sourceT = Rx.Observable.fromEvent(window.document, 'keydown');
var sourceM = Rx.Observable.fromEvent(window.document, 'mousedown');

function isKey (keyCode){
    return function(event){
        return event.keyCode === keyCode;
    };
}

function isBtn (btnCode){
    return function(event){
        return event.buttons === btnCode;
    };
}

sourceT.filter(isKey(_frente)).subscribe(irParaFrente);
sourceT.filter(isKey(_direita)).subscribe(irParaDireita);
sourceT.filter(isKey(_esquerda)).subscribe(irParaEsquerda);
sourceT.filter(isKey(_tras)).subscribe(irParaTras);
sourceT.filter(isKey(_interagir)).subscribe(interagir);
sourceM.filter(isBtn(_acionarArma)).subscribe(acionarArma);
sourceM.filter(isBtn(_trocarArma)).subscribe(trocarArma);
