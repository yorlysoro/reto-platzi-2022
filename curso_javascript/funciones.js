// Declarativas

function myFunction() {
    return 3;
}

// Expresivas

var myFunction2 = function() {
    return 3;
}

console.log(myFunction());
console.log(myFunction2());

var myFunction3 = function(a, b) {
    return a + b;
}

console.log(myFunction3(2, 3));