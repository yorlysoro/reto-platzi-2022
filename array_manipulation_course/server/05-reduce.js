const totals = [ 100, 200, 300, 400, 500 ];

let sum = 0;
for (let i = 0; i < totals.length; i++) {
    sum += totals[i];
}
console.log(sum);

const rta = totals.reduce((acc, item) => acc + item, 0);
console.log(rta);