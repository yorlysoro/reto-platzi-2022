var frutas = ["Manzana", "Naranja", "Pera", "Platano"];

console.log(frutas);

console.log(frutas.length);

frutas.push("Uvas");
var ultimo = frutas.pop();

var primero = frutas.shift();

frutas.unshift("Fresa");
console.log(frutas);
console.log(ultimo);
console.log(primero);