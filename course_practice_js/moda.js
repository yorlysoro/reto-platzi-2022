const lista3 = [
    1,
    1,
    2,
    3,
    2,
    5,
    5,
    3,
    4,
];

function calcularModa(lista){
    let lista3_count = {};

    lista3.map(
        (element) => {
            if(lista3_count[element]){
                lista3_count[element]++;
            } else {
                lista3_count[element] = 1;
            }
        }
    )

    const lista3_array = Object.entries(
        lista3_count).sort(
            (elementa, elementb) => {
                return elementa[1] - elementb[1];
            }
        );

    const moda = lista3_array[lista3_array.length - 1][1];
    return moda;
}


const resultado = calcularModa(lista3);
const pModa = document.getElementById('moda');
pModa.innerText = `La moda es: ${resultado}`;