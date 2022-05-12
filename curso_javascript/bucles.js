var frutas = ["Manzana", "Naranja", "Pera", "Platano"];
console.log("\nFor\n");
for (let index = 0; index < frutas.length; index++) {
    const element = frutas[index];
    console.log(element);
}
console.log("\nForEach\n");
frutas.forEach(element => {
    console.log(element);
});
console.log("\nForIn\n");
for (const index in frutas) {
    const element = frutas[index];
    console.log(element);
}

console.log("\nForOf\n");
for (const element of frutas) {
    console.log(element);
}
console.log("\nWhile\n");
index = 0
while (frutas.length != index) {
    console.log(frutas[index]);
    index++;
}
console.log("\nDoWhile\n");
index = 0
do {
    console.log(frutas[index]);
    index++;
} while (frutas.length != index);
