"use strict";
//El usuario debe ingresar la base y altura por teclado
//El area debe guardarse en una variable
//El resultado debe ser mostrado por pantalla
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("ingrese la base:");
var altura = rls.questionInt("ingrese la altura:");
var area = base * altura;
console.log("el area es:", area);
