// import de libreria y funciones del modulo adivinzanza.js
const readlineSync = require('readline-sync');
const {generarNumeroAleatorio , verificarAdivinanza} = require('./adivinanza');

// funcion para interactuar con usuario
const obtenerNumeroUsuario = () => {
    return readlineSync.question('Ingresa un numero: ');
};

//funcion para comenzar el juego
const juegoAdivinanza = () =>{
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el número del 1 al 100.\n');

    while (numeroAdivinado !== numeroSecreto){
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
};

juegoAdivinanza();

