const lista2 = [
    100,
    200,
    500,
    4000000000,
];

const mitadLista2 = parseInt(lista2.length / 2);

function esPar(numero){
    if(numero % 2 == 0){
        return true;
    }
    return false;
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        (a, b) => a + b, 0
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

let mediana;

const lista_sort = lista2.sort((a, b) => a - b);

if(esPar(lista_sort.length)){
    const element1 = lista_sort[mitadLista2 - 1];
    const element2 = lista_sort[mitadLista2];
    const listElement = [element1, element2];
    mediana = calcularMediaAritmetica(listElement);
} else {
    mediana = lista_sort[mitadLista2];
}

const pMediana = document.getElementById('mediana');
pMediana.innerText = `La mediana es: ${mediana}`;