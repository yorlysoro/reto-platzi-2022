const numbers = [
    2, 4, 6, 8, 10
]

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 10) {
        rta = element;
        break;
    }
}

console.log("for", rta);

const rta2 = numbers.find(item => item === 10);
console.log("find", rta2);

const products = [
    {
        name: "Pizza",
        price: 12,
        //emoji: "🍕"
        id: '🍕'
    },
    {
        name: "Hamburguesa",
        price: 10,
        //emoji: "🍔"
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 8,
        //emoji: "🌭"
        id: '🌭'
    },
]

const rta3 = products.find(item => item.id === "🍔");
console.log("find", rta3);

const rta4 = products.findIndex(item => item.id === "🍔");
console.log("findIndex", rta4);