"use strict";
//Leer valores hasta que se introduzca un cero (0)
//El usuario puede introducir valore positivos y negativos.
//Encontrar el maximo de los elementos que se introdujeron.
//Analizar como cambia el programa para hallar el minimo.//
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var valor = rls.questionInt("Ingrese un valor positivo o negativo:");
var valorMax = 0;
do {
    valor = rls.questionInt("ingrese un valor positivo o negativo");
    if (valor > valorMax) {
        valorMax = valor;
    }
} while (valor !== 0);
console.log("El valor maximo ingresado es:", valorMax);
