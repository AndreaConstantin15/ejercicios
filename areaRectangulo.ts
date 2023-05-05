//El usuario debe ingresar la base y altura por teclado
//El area debe guardarse en una variable
//El resultado debe ser mostrado por pantalla

import * as rls from 'readline-sync'

let base:number = rls.questionInt("ingrese la base:");
let altura:number = rls.questionInt("ingrese la altura:");

let area:number = base*altura
console.log("el area es:",area);