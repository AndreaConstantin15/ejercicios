import * as rls from "readline-sync"
function esMultiplo(num1:number,num2:number): boolean {
   let multiplo= num1%num2==0
   return multiplo

}
let numero1:number=rls.questionInt("ingrese numero")
let numero2:number=rls.questionInt("ingrese numero")
if(esMultiplo(numero1,numero2)){
   console.log("el numero",numero1,"es multiplo de",numero2)
}
else{console.log("el numero",numero1, "no es multiplo",numero2)}
