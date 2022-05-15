var articulos = [
    { nombre : "Bici", precio : 100 },
    { nombre : "Tv", precio : 200 },
    { nombre : "Libro", precio : 10 },
    { nombre : "Celular", precio : 500 },
    { nombre : "Laptop", precio : 2000 },
    { nombre : "Teclado", precio : 50 },
    { nombre : "Audifonos", precio : 400 },
]


/* Find */
var articulo_encontrado = articulos.find(function(articulo){
    return articulo.nombre = "Bici";
});

console.log(articulo_encontrado)

/* ForEach */
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});


/* Some */
var articulos_mayores_a_500 = articulos.some(function(articulo){
    return articulo.precio > 500;
});

console.log(articulos_mayores_a_500);