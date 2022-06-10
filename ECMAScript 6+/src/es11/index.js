//Dinamic import 
const button = document.getElementById('btn');

button.addEventListener('click', async function () {
    const module = await import('./file.js');
    module.hello();
});

//big int
const bigInt = BigInt(1001455887899877);
const anotherBigInt = 1001455887899877n;

console.log(bigInt)
console.log(anotherBigInt)

//promise.allSettled
const promise1  = new Promise((resolve, reject) => reject('Error'));
const promise2  = new Promise((resolve, reject) => resolve('Success'));
const promise3  = new Promise((resolve, reject) => resolve('Success'));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

//Global This
console.log(this);
console.log(window);
console.log(global);
console.log(self);
console.log(globalThis);

//Nullish Coalescing Operator
const fooo = null ?? 'default';
console.log(fooo);

//Optional Chaining
const user = {}
console.log(user?.profile?.email)
if(user?.profile?.email){
    console.log("email")
} else {
    console.log("no email")
}