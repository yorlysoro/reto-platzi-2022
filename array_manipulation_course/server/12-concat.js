const elements = ["Fire", "Air", "Water"];
const otherElements = ["Earth", "Wind", "Light"];

const newArray = [...elements];
for(let i = 0; i < otherElements.length; i++){
    newArray.push(otherElements[i]);
}
console.log("for",newArray);

const newArray2 = elements.concat(otherElements);
console.log("concat",newArray2);