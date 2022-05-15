function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var miAuto = new auto("Ford", "XML", "2013")
console.log(miAuto)
console.log(miAuto.marca)
console.log(miAuto.modelo)
console.log(miAuto.annio)

var autos = new Array()
for (let i = 0; i < 5; i++) {
    autos.push(new auto("Ford " + String(i), "XML", "2013"))
}

console.log(autos)