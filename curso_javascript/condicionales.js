if (false){
    console.log("Esto es una condicion verdadera");
}else if (true){
    console.log("Esto es una condicion verdadera 2");
}
else {
    console.log("Esto es una condicion falsa");
}

var edad = 18;

if(edad === 18){
    console.log("Eres mayor de edad");
}else if(edad === 17){
    console.log("Eres manor de edad");
}else {
    console.log("Eres una persona que no es ni mayor ni menor de edad");
}

var result = edad > 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(result);