let array = [1,2,3, [4,5,6, [7,8,9]]];

console.log(array.flat(2));

let array2 = [1,2,3,4,5,6,7,8,9];

console.log(array2.flatMap(x => [x, x*2]));

let hello = '                Hello    World     ';

console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());
console.log(hello.trim());

try {
  console
  .log(hello.trimStart('H'));
}
catch {
    console.log(error);
}

let entries = [['name', 'Jhon'], ['age', 30], ['country', 'MX']];
console.log(Object.fromEntries(entries));

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);
