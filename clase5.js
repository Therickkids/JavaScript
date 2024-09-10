let numeros = [1,3,5];
console.log (numeros.length); // debe mostrar en consola 3

// Agregar un dato al final
numeros.push(20);
console.log(numeros); // debe mostrar todos los elementos del arreglo

// quitar el ultimo dato
numeros.pop()
console.log(numeros);

// arreglos con distintos tipo de datos
let datos = ["juan", true, 20 ,10.56];

let arreglo = []
arreglo[0]=10
arreglo[1]= "pedro"
console.log (arreglo);

//loops
for (let i=0;i<datos.length;i++){
    console.log(datos[i]);

}

// METODOS DE LOS ARREGLOS
//.REDUCE()
let suma = numeros.reduce((suma,valor)=>{
    return suma+valor 

})
let resta = numeros.reduce((resta,valor)=>{
    return resta-valor 
})
console.log(suma);
console.log(resta);

//.foreach()
let sumaArreglo =0
numeros.forEach((numero)=>{
    sumaArreglo += numero;

})
console.log(sumaArreglo);

//.filter()
let filtro = numeros.filter(numero =>{
    return numero < 5
})
console.log (filtro);

//.map()

let map = numeros.map (numero=>{
    return ("$" + numero * 20 )
})
console .log(map);