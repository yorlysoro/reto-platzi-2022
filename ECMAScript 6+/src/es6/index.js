//Default Params y Concatenación
function newFunction(name, age, country) {
    var name = name || 'John';
    var age = age || 30;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6
function newFunction(name = 'John', age = 30, country = 'MX') {
    console.log(name, age, country);
}

newFunction();
newFunction('Juan', 32, 'CO');

// no es6
let hello = "Hello"
let world = "World"
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)
// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)

//LET y CONST, Multilínea, Spread Operator y Desestructuración
let lorem = "lorem ipsum dolor sit amet consectetur adipiscing elit\n"
    + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\n"
    + "Ut enim ad minim veniam\n";

console.log(lorem);

// es6
let lorem2 = `lorem ipsum dolor sit amet consectetur adipiscing elit
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Ut enim ad minim veniam`;
console.log(lorem2);

let person = {
    'name': 'John',
    'age': 30,
    'country': 'MX'
}

console.log(person.name, person.age, person.country);

// es6
let { name, age, country } = person;
console.log(name, age, country);


// Spread Operator
let team1 = ['John', 'Mike', 'Mary'];
let team2 = ['Sam', 'Ann', 'Linda'];

let education = ['Juan', ...team1, ...team2];

console.log(education)

var hola = 'Hola';
let hola2 = 'Hola';

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

const a = 'Hello';
console.log(a);
a = 'a';
console.log(a);

//Arrow Functions, Promesas y Parámetros en objetos

obj = { name: 'John', age: 30 };
//es6
obj2 = { name, age};

console.log(obj2);

const names = [
    { name: 'John', age: 30 },
    { name: 'Mike', age: 23 },
    { name: 'Mary', age: 25 }
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
});

//es6
let listOfNames2 = names.map(item => console.log(item.name));
const listOfNames3 = (name, age) => console.log(name, age);
const listOfNames4 = name => console.log(name);
const square = num => num * num;

console.log(square(4));

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Success');
        } else {
            reject('Error');
        }
    });
}

helloPromise().then(response => console.log(response))
    .catch(error => console.log(error));

//Clases, Módulos y Generadores

class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

let calculate = new Calculator();

console.log(calculate.sum(2, 3));

import { hello } from './module';

console.log(hello());

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
