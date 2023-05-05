//Leer valores hasta que se introduzca un cero (0)
//El usuario puede introducir valore positivos y negativos.
//Encontrar el maximo de los elementos que se introdujeron.
//Analizar como cambia el programa para hallar el minimo.//

import * as rls from "readline-sync";

let valor : number = rls.questionInt ("Ingrese un valor positivo o negativo:"); 
let valorMax = 0

do {
    valor = rls.questionInt ("ingrese un valor positivo o negativo");

   
   
    if(valor> valorMax) {
        valorMax= valor;
    }
}

 while (valor!== 0);
console.log ("El valor maximo ingresado es:",valorMax);
