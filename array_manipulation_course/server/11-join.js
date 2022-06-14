const elements = ["Fire", "Air", "Water"];
let rtaFinal = "";
let separator = "--";
for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    rtaFinal = rtaFinal + element + separator;
}

console.log("for",rtaFinal);

const rta2 = elements.join("--");
console.log("join",rta2);


const title = "Curso de manipulación de arrays";

const patterns = title.split(" ");
console.log("split", patterns);

const tittleFinal = patterns.join("-").toLowerCase();
console.log("join", tittleFinal);