//spread operator
const obj = {
    name: 'John',
    age: 30,
    country: 'MX'
}

let { country, ...all } = obj;

console.log(country, all);

//Porpagation Properties

const obj1 = {
    ...obj,
    country: 'US'
}

console.log(obj1);

//Promise Finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('Hello World'), 3000) 
        : reject(new Error('Error'));
    }
    ).finally(() => console.log('Finally'));
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'));


//Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-01-01');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(`Date -> ${year}/${month}/${day}`);
