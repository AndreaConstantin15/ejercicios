//ejercicios de operadores lógicos (IF ,ELSE) 


import * as rls from "readline-sync";

let edadUsuario:number =  rls.question("por favor indique la edad del usuario ");

//console.log("la edad del usuario es:" , mayorDeEdad);

if (edadUsuario>= 18){
    console.log ("el usuario es mayor de edad");
}
    else {
    console.log ("el usuario es menor de edad");
}

console.log ("ultima linea del programa");

