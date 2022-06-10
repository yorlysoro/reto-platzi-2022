//Replace
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web"

const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

//Metodos Privados
class Message {
    #show(val){
        console.log(val);
    };
    print(val){
        this.#show(val);
    }
};

const message = new Message();
message.print("Hola Mundo");

//Promise any
const promise1 = new Promise((resolve, reject) => rejetc('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

// WeakRef(element)
class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
}

// New logic operator

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);
console.log(isTrue &&= isFalse);
