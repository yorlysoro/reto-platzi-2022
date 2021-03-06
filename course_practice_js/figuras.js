// Cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;

// console.log("Lados " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

//console.log("Perimetro " + perimetroCuadrado(5) + " cm");

function areaCuadrado(lado) {
    return lado ** 2;
} 
//console.log("Area " + areaCuadrado + " cm2");
console.groupEnd();

// Triangulo

console.group("Triangulo");
// const ladaTriangulo1 = 6;
// const ladaTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Lados Triangulo: " + ladaTriangulo1 + " cm " + 
//     ladaTriangulo2 + " cm " + baseTriangulo + " cm");

//console.log("Altura " + alturaTriangulo + " cm");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
//console.log("Perimetro " + perimetroTriangulo + " cm");
function areaTriangulo(base, altura){
    return base * altura / 2;
}
//console.log("Area " + arearTriangulo + " cm2");
console.groupEnd();


// Circulo
console.group("Circulo");
// const radioCirculo = 4;
//console.log("Radio " + radioCirculo + " cm");
//const diametroCirculo = radioCirculo * 2;
function diametroCirculo(radio){
    return radio * 2;
}
//console.log("Diametro " + diametroCirculo + " cm");
const pi = Math.PI
//console.log("Pi " + pi);
function circunferenciaCirculo(radio){
    return diametroCirculo(radio) * pi;
}
//console.log("Circunferencia " + circunferenciaCirculo + " cm");
function AreaCirculo(radio){
    return pi * (radio ** 2);
}

function perimitroCirculo(radio){
    return pi * radio;
}
//console.log("Area " + AreaCirculo + " cm2");

console.groupEnd()

// Funciones HTML
function calcularPermitroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const result = perimetroCuadrado(value);
    const resultInput = document.getElementById("resultadoCuadrado");
    resultInput.value = "";
    resultInput.value = result;
    const medida = document.getElementById("medidaCuadrado");
    medida.innerHTML = "cm";
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const result = areaCuadrado(value);
    const resultInput = document.getElementById("resultadoCuadrado");
    resultInput.value = "";
    resultInput.value = result;
    const medida = document.getElementById("medidaCuadrado");
    medida.innerHTML = "cm^2";
}


function calcularPermitroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("inputTriangulo2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("baseTriangulo");
    const value3 = parseInt(input3.value);
    if (isNaN(value1) || isNaN(value2) || isNaN(value3)) {
        alert("Ingrese valores validos");
        return;
    } else if  (value1 === 0 || value2 === 0 || value3 === 0) {
        alert("Ingrese valores validos");
        return;
    }
    const result = perimetroTriangulo(value1, value2, value3);
    const resultInput = document.getElementById("resultadoTriangulo");
    resultInput.value = "";
    resultInput.value = result;
    const medida = document.getElementById("medidadTriangulo");
    medida.innerHTML = "cm";
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("baseTriangulo");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("alturaTriangulo");
    const value2 = parseInt(input2.value);
    const result = areaTriangulo(value1, value2);
    if (isNaN(value1) || isNaN(value2)) {
        alert("Ingrese valores validos");
        return;
    } else if  (value1 === 0 || value2 === 0) {
        alert("Ingrese valores validos");
        return;
    }
    const resultInput = document.getElementById("resultadoTriangulo");
    resultInput.value = "";
    resultInput.value = result;
    const medida = document.getElementById("medidadTriangulo");
    medida.innerHTML = "cm^2";
}

const currentDate = document.getElementById("currentDate");
const date = Date.now();
const dateFormat = new Date(date);
currentDate.innerHTML = dateFormat;

function calcularPerimitroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = parseFloat(input.value);
    const result = perimitroCirculo(value);
    const resultInput = document.getElementById("resultadoCirculo");
    resultInput.value = "";
    resultInput.value = result;
    const medida = document.getElementById("medidaCirculo");
    medida.innerHTML = "cm";
}


function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = parseFloat(input.value);
    const result = AreaCirculo(value);
    const resultInput = document.getElementById("resultadoCirculo");
    resultInput.value = "";
    resultInput.value = result;
    const medida = document.getElementById("medidaCirculo");
    medida.innerHTML = "cm^2";
}

function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = parseFloat(input.value);
    const result = diametroCirculo(value);
    const resultInput = document.getElementById("resultadoCirculo");
    resultInput.value = "";
    resultInput.value = result;
    const medida = document.getElementById("medidaCirculo");
    medida.innerHTML = "cm";
}

function calcularCircunferenciaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = parseFloat(input.value);
    const result = circunferenciaCirculo(value);
    const resultInput = document.getElementById("resultadoCirculo");
    resultInput.value = "";
    resultInput.value = result;
    const medida = document.getElementById("medidaCirculo");
    medida.innerHTML = "cm";
}


function isoscelesTriangleHeight(side1, side2, side3){
    var side = 0;
    if(side1 === side2 && side3 < side1 && side3 < side2){
        side = side1 ** 2;
        base = side3 ** 2;
        result = Math.sqrt(side - (base / 4));
        return result;
    } else {
        alert("No es un triangulo isosceles");
        return 0;
    }
}

function calcularAlturaTrianguloIsoceles(){
    const input1 = document.getElementById("inputTrianguloIsoceles1");
    const value1 = parseFloat(input1.value);
    const input2 = document.getElementById("inputTrianguloIsoceles2");
    const value2 = parseFloat(input2.value);
    const input3 = document.getElementById("baseTrianguloIsoceles");
    const value3 = parseFloat(input3.value);
    if (isNaN(value1) || isNaN(value2) || isNaN(value3)) {
        alert("Ingrese valores validos");
        return;
    } else if  (value1 === 0 || value2 === 0 || value3 === 0) {
        alert("Ingrese valores validos");
        return;
    }
    const result = isoscelesTriangleHeight(value1, value2, value3);
    const resultInput = document.getElementById("alturaTrianguloIsoceles");
    resultInput.value = "";
    resultInput.value = result;
}