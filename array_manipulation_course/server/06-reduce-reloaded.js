const items = [1, 2, 3, 4, 5, 3, 4, 1, 1];


const rta = items.reduce((obj, value) => {
    if(obj[value]){
        obj[value]++;
    } else {
        obj[value] = 1;
    }
    return obj;
}, {});

console.log(rta);
const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Zulema",
        level: "high",
    },
    {
        name: "Santiago",
        level: "medium",
    },
    {
        name: "Valentina",
        level: "low",
    }
]

const rta1 = data
.map(item => item.level)
.reduce((obj, value) => {
    if(obj[value]){
        obj[value]++;
    }
    else {
        obj[value] = 1;
    }
    return obj;
}, {});
console.log(rta1);

const numbers = [1,2,3,4,5,6,7,8,9,10];

const rta3 = numbers.reduce((obj, value) => {
    if(value < 5){
        obj["1-5"] +=  1;
    } else if (value < 9){
        obj["6-8"] +=  1;
    }else{
        obj["9-10"] +=  1;
    }
    return obj;
}, {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0,
});

console.log(rta3);