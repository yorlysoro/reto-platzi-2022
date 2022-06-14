//matriz 3x3
const matriz = [
    [1,2,3],
    [4,5,6], [7,8,9, [10,11,12]],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++){
    const array = matriz[i];
    for (let j = 0; j < array.length; j++){
        const element = array[j];
        newArray.push(element);
    }
}
console.log("for", newArray);

const rta = matriz.flat(3);
console.log("flat", rta);