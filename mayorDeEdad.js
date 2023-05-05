"use strict";
//ejercicios de operadores lógicos (IF ,ELSE) 
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var edadUsuario = rls.question("por favor indique la edad del usuario ");
//console.log("la edad del usuario es:" , edadUsuario);
if (edadUsuario >= 18) {
    console.log("el usuario es mayor de edad");
}
else {
    console.log("el usuario es menor de edad");
}
console.log("ultima linea del programa");
