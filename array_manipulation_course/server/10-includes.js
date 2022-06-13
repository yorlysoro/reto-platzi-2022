const pets = ['cat', 'dog', 'fish'];

let rta = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        rta = true;
        break;
    }
}

console.log("for", rta);

const rta2 = pets.includes('dog');
console.log("includes", rta2);
