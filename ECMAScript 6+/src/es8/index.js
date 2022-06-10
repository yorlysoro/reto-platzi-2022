const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'María'
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

const values = Object.values(data)
console.log(values)

const string = "hello"
console.log(string.padStart(7, "hi"))
console.log(string.padEnd(7, "hi"))

const obj = {
    name: 'John',
    age: 30,
}

//Async Await
const helloWorld = () => 
    new Promise((resolve, reject) => {
        (false) 
        ? setTimeout(() => resolve('Hello World'), 3000) 
        : reject(new Error('Error'));
    }
);

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();