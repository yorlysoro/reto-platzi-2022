//Helpers
function esPar(numero) {
    return numero % 2 === 0;
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        (a, b) => a + b, 0
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora de medianas
function medianaSalarios(lista){
    let mediana;
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
    }else{
        mediana = lista[mitad];
    }
    return mediana;

}

//Mediana General
const salariosCol = colombia.map(
    (persona) => {
        return persona.salario;
    }
);

const salarioColOrdenado = salariosCol.sort(
    (a, b) => {
        return a - b;
    }
);

//Mediana del top 10%
const spliceStart =  salarioColOrdenado.length * 0.1;
const spliceCount = salarioColOrdenado.length - spliceStart;
const salariosColTop10 = salarioColOrdenado.splice(
    spliceStart, spliceCount
);

const medianaTop10Col = medianaSalarios(salariosColTop10);



const medianaGeneralCol = medianaSalarios(salarioColOrdenado);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});