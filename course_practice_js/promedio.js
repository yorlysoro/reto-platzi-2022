const lista1 = [
    100,
    200,
    300,
    500,
];


function calcularMediaAritmetica(lista){
    // let sumaLista1 = 0;

    // for (let i = 0; i < lista1.length; i++) {
    //     sumaLista1 += lista1[i];
    // }
    const sumaLista1 = lista.reduce(
        (a, b) => a + b, 0
    );
    const promedioLista = sumaLista1 / lista1.length;
    return promedioLista;
}

const restultado = calcularMediaAritmetica(lista1);
const pMedia = document.getElementById('media');
pMedia.innerText = `La media aritmetica es: ${restultado}`;