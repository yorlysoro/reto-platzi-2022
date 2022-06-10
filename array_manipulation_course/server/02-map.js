const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//   newArray.push(letters[index] + '++');
// }
const newArray = letters.map(letter => letter + '++');
console.log('Original:', letters);
console.log('New:', newArray);