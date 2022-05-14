var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    direccion: {
        calle: "Calle falsa 123",
        ciudad: "Madrid",
        pais: "España"
    },
}
objeto.direccion.pais = "Francia";
console.log(objeto);

/* crear un objeto con los siguientes atributos:
    nombre
    apellido
    edad
    direccion
        calle
Y con su funcion constructora */
function Persona(nombre, apellido, edad, direccion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.direccion = direccion;
}

class Persona2 {
    nombre = "";
    apellido = "";
    edad = 0;
    direccion = "";
    Persona2(nombre, apellido, edad, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
    }
}

instancia = new Persona2("Juan", "Perez", 30, 'Direccion')
console.log(instancia.nombre)