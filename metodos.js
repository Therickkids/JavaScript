// 1. Arreglo de números
let numeros = [1, 3, 5, 7, 9];
console.log("Arreglo de números:", numeros);

// Aplicando reduce
let sumaNumeros = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
console.log("Suma de los números con reduce:", sumaNumeros);

// Aplicando forEach
let totalNumeros = 0;
numeros.forEach(num => totalNumeros += num);
console.log("Suma con forEach:", totalNumeros);

// Aplicando filter
let numerosFiltrados = numeros.filter(num => num > 5);
console.log("Números mayores que 5 con filter:", numerosFiltrados);

// Aplicando map
let numerosMultiplicados = numeros.map(num => num * 2);
console.log("Números multiplicados por 2 con map:", numerosMultiplicados);


// 2. Arreglo de nombres
let nombres = ["Juan", "Pedro", "Ana", "Maria", "Luis"];
console.log("Arreglo de nombres:", nombres);

// Aplicando reduce
let nombresConcat = nombres.reduce((acum, nombre) => acum + " " + nombre);
console.log("Concatenación de nombres con reduce:", nombresConcat);

// Aplicando forEach
nombres.forEach(nombre => console.log("Nombre con forEach:", nombre));

// Aplicando filter
let nombresFiltrados = nombres.filter(nombre => nombre.length > 3);
console.log("Nombres con más de 3 letras con filter:", nombresFiltrados);

// Aplicando map
let nombresEnMayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log("Nombres en mayúsculas con map:", nombresEnMayusculas);


// 3. Arreglo de booleanos
let booleanos = [true, false, true, true, false];
console.log("Arreglo de booleanos:", booleanos);

// Aplicando reduce
let cuentaVerdaderos = booleanos.reduce((acum, valor) => valor ? acum + 1 : acum, 0);
console.log("Cantidad de verdaderos con reduce:", cuentaVerdaderos);

// Aplicando forEach
booleanos.forEach(bool => console.log("Booleano con forEach:", bool));

// Aplicando filter
let soloVerdaderos = booleanos.filter(valor => valor);
console.log("Solo verdaderos con filter:", soloVerdaderos);

// Aplicando map
let booleanosInvertidos = booleanos.map(bool => !bool);
console.log("Booleanos invertidos con map:", booleanosInvertidos);


// 4. Arreglo de mezclas
let mezcla = [1, "Juan", true, 3.14, "Maria"];
console.log("Arreglo mezclado:", mezcla);

// Aplicando reduce
let cadenaMezcla = mezcla.reduce((acum, valor) => acum + " " + valor, "");
console.log("Concatenación de todos los valores con reduce:", cadenaMezcla);

// Aplicando forEach
mezcla.forEach(valor => console.log("Valor con forEach:", valor));

// Aplicando filter
let soloStrings = mezcla.filter(valor => typeof valor === "string");
console.log("Solo strings con filter:", soloStrings);

// Aplicando map
let tiposDeDatos = mezcla.map(valor => typeof valor);
console.log("Tipos de datos con map:", tiposDeDatos);


// 5. Arreglo de decimales
let decimales = [0.5, 1.2, 3.8, 7.6, 9.1];
console.log("Arreglo de decimales:", decimales);

// Aplicando reduce
let sumaDecimales = decimales.reduce((acum, valor) => acum + valor, 0);
console.log("Suma de decimales con reduce:", sumaDecimales);

// Aplicando forEach
decimales.forEach(decimal => console.log("Decimal con forEach:", decimal));

// Aplicando filter
let decimalesFiltrados = decimales.filter(decimal => decimal > 2);
console.log("Decimales mayores que 2 con filter:", decimalesFiltrados);

// Aplicando map
let decimalesCuadrados = decimales.map(decimal => decimal ** 2);
console.log("Decimales al cuadrado con map:", decimalesCuadrados);
