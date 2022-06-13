const numbers = [2,4,6,8,10];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element >= 10){
        rta = false;
    }
}

console.log("for",rta);

const rta2 = numbers.every(item => item <= 10);
console.log("every",rta2);

const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Zulema",
        age: 14,
    },
    {
        name: "Santiago",
        age: 16,
    },
    {
        name: "Valentina",
        age: 18,
    },
];

const rta3 = team.every(item => item.age >= 18);
console.log("every",rta3);