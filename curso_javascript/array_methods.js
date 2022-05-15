var articulos = [
    { nombre : "Bici", precio : 100 },
    { nombre : "Tv", precio : 200 },
    { nombre : "Libro", precio : 10 },
    { nombre : "Celular", precio : 500 },
    { nombre : "Laptop", precio : 2000 },
    { nombre : "Teclado", precio : 50 },
    { nombre : "Audifonos", precio : 400 },
]

var articulos_filtrados = articulos.filter(function(articulo){
    return articulo.precio >= 500;
});

console.log(articulos_filtrados)

var articulos_nombres = articulos.map(function(articulo){
    return articulo.nombre;
});

console.log(articulos_nombres)



