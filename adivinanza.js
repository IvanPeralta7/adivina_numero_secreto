//funcion generadora del numero aleatorio, transformando a numero entero el numero generado con math.random
const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100)  + 1;
};
//funcion para comparar y devolver mensaje 
const verificarAdivinanza = (numeroSecreto, numeroAdivinado) =>{
    if (numeroAdivinado  === numeroSecreto){
        console.log("Felicitaciones! ¡Adivinaste el numero secreto!");
    }else if (numeroAdivinado > numeroSecreto) {
        console.log("El numero secreto es menor, ¡Sigue intentando!");
    } else{
        console.log("El numero secreto es mayor, ¡Sigue intentando!");
    };
};
//exports de funciones
module.exports = {
    generarNumeroAleatorio, verificarAdivinanza
};