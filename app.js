//Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es par");
    } else {
        console.log(numero + " es impar");
    };
};
esParOImpar(1);
esParOImpar(2);

//Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
function cualEsMayor(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " es mayor que " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " es mayor que " + num1);
    } else {
        console.log(num1 + " y " + num2 + " son iguales");
    };
};
cualEsMayor(8, 10);
cualEsMayor(10, 10);

//Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
function esMultiploDe5(numero) {
    if (numero % 5 === 0) {
        console.log(numero + " es múltiplo de 5");
    } else {
        console.log(numero + " no es múltiplo de 5");
    };
};
esMultiploDe5(2);
esMultiploDe5(5);

//Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function impNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    };
};
impNumerosHasta(5);

//Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
function impPalabras(palabra, n) {
    for (let i = 0; i < n; i++) {
        console.log(palabra);
    };
};
impPalabras("Hola", 3);

//Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
function impArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    };
};
const numeros = [1, 2, 3, 4, 5];
impArray(numeros);

//Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
function impArraySinQuintoElemento(array) {
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) {
            console.log(array[i]);
        };
    };
};
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
impArraySinQuintoElemento(array2);

//Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
function imprimirMultiplicacionArrayPorNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * numero);
    };
};
const array = [1, 2, 3, 4, 5];
const numero = 2;
imprimirMultiplicacionArrayPorNumero(array, numero);