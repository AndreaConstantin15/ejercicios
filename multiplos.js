"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
function esMultiplo(num1, num2) {
    var multiplo = num1 % num2 == 0;
    return multiplo;
}
var numero1 = rls.questionInt("ingrese numero");
var numero2 = rls.questionInt("ingrese numero");
if (esMultiplo(numero1, numero2)) {
    console.log("el numero", numero1, "es multiplo de", numero2);
}
else {
    console.log("el numero", numero1, "no es multiplo", numero2);
}
