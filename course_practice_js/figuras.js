// Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;

console.log("Lados " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("Perimetro " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado ** 2;
console.log("Area " + areaCuadrado + " cm2");
console.groupEnd();

// Triangulo

console.group("Triangulo");
const ladaTriangulo1 = 6;
const ladaTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Lados Triangulo: " + ladaTriangulo1 + " cm " + 
    ladaTriangulo2 + " cm " + baseTriangulo + " cm");

console.log("Altura " + alturaTriangulo + " cm");
const perimetroTriangulo = ladaTriangulo1 + ladaTriangulo2 + baseTriangulo;
console.log("Perimetro " + perimetroTriangulo + " cm");

const arearTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("Area " + arearTriangulo + " cm2");
console.groupEnd();


// Circulo
console.group("Circulo");
const radioCirculo = 4;
console.log("Radio " + radioCirculo + " cm");
const diametroCirculo = radioCirculo * 2;
console.log("Diametro " + diametroCirculo + " cm");
const pi = Math.PI
console.log("Pi " + pi);
const circunferenciaCirculo = diametroCirculo * pi;
console.log("Circunferencia " + circunferenciaCirculo + " cm");
const AreaCirculo = pi * (radioCirculo ** 2);
console.log("Area " + AreaCirculo + " cm2");

console.groupEnd()