var articulos = [
    { nombre : "Bici", precio : 100 },
    { nombre : "Tv", precio : 200 },
    { nombre : "Libro", precio : 10 },
    { nombre : "Celular", precio : 500 },
    { nombre : "Laptop", precio : 2000 },
    { nombre : "Teclado", precio : 50 },
    { nombre : "Audifonos", precio : 400 },
]

/* Push */
articulos.push({ nombre : "Coche", precio : 10000 });
console.log(articulos)

/* Shift */
articulos.shift();
console.log(articulos)