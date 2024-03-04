let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   console.log(intentos);
   if(numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' :'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
    // El usuario no acerto
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
   }
   return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = (Math.floor(Math.random()*numeroMaximo)+1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //ya sorteamos todos los numeros?
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        // si el numero esta includio esta en la lista
            if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales () {
    asignarTextoElemento ('H1','Juego del numero secreto');
    asignarTextoElemento ('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}

function reiniciarJuego() {
    // limpiar la caja
    limpiarCaja();
    // indicar mensaje de inicio
    //Reset intentos
    //Generar el numero aleatorio
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();