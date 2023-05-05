//
//Cree un algoritmo que visualice los numeros que son multiplos de 2 o de 3 que hay entre 1 y 100
//Tener en cuenta que hay numeros que son multiplos de 2 y de 3 al mismo tiempo.
//En dichos casos,solamente indique el numero una vez.
//iterations from i 1vto 100
//modulus operator % === 0 mult
var resultado = "";
for (var cont = 0; cont <= 100; cont++) {
    if (cont % 2 == 0 || cont % 3 == 0) {
        resultado += "".concat(cont, ", ");
    }
}
console.log("multiplos 2,multiplos 3:", resultado);
