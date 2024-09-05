/*  
Julian Manrique Cuervo
Fecha: 4/09/2024 
Programacion Web 

*/


// Variables usando let
let nombre = "Julian";
let edad = 30;
let ciudad = "Medellín";
let pais = "Colombia";
let profesion = "Desarrollador";

// Variables usando const
const PI = 3.1416;
const GRAVEDAD = 9.8;
const VELOCIDAD_LUZ = 299792458;
const NUMERO_AVOGADRO = 6.022e23;
const NOMBRE_COMPLETO = "Julian Cuervo";

// Funciones tipo flecha
// Sin parámetros
const saludar = () => "¡Hola, mundo!";

// Un parámetro
const cuadrado = (num) => num * num;

// Dos o más parámetros
const sumar = (a, b) => a + b;

// Funciones con más lógica
// Sin parámetros
const obtenerHora = () => {
    const fecha = new Date();
    return fecha.toLocaleTimeString();
};

// Un parámetro con validación
const esPar = (num) => {
    if (typeof num !== 'number') {
        return "El parámetro debe ser un número";
    }
    return num % 2 === 0;
};

// Dos parámetros con switch
const operacion = (a, b, operador) => {
    switch (operador) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : "No se puede dividir por cero";
        default:
            return "Operador no válido";
    }
};

// Función con bucle for
const contarHasta = (limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(i);
    }
};



// Ejemplos de uso

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Ciudad:", ciudad);
console.log("País:", pais);
console.log("Profesión:", profesion);
console.log("PI:", PI);
console.log("Gravedad:", GRAVEDAD);
console.log("Velocidad de la luz:", VELOCIDAD_LUZ);
console.log("Número de Avogadro:", NUMERO_AVOGADRO);
console.log("Nombre completo:", NOMBRE_COMPLETO);
console.log(saludar());
console.log(cuadrado(4));
console.log(sumar(5, 7));
console.log(obtenerHora());
console.log(esPar(10));
console.log(operacion(10, 5, '+'));
contarHasta(5);
