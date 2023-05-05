"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var carasDados = 6;
var cantidadDados = rls.questionInt("ingrese la cantidad de dados:");
var denominador = Math.pow(carasDados, cantidadDados);
var probabilidadTodosseis = 1 / denominador;
console.log("el denominador es ", denominador, "probabilidad de sacar todo 6", probabilidadTodosseis * 100);
