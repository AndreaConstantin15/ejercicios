import *as rls from"readline-sync"

let carasDados:number=6
let cantidadDados:number=rls.questionInt("ingrese la cantidad de dados:")
let denominador=Math.pow (carasDados,cantidadDados);
let probabilidadTodosseis:number =1/denominador
console.log("el denominador es ",denominador,"probabilidad de sacar todo 6",probabilidadTodosseis*100);

