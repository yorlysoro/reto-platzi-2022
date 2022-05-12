var op1 = "piedra"
var op2 = "papel"
var op3 = "tijera"
var op4 = "empate"

// Generado por copilot
var result = function(user, computer){
    if(user === computer){
        return op4; // empate
    }else if(user === "piedra"){  // piedra
        if(computer === "tijera"){
            return "computadora gana";
        }
        else{
            return "usuario gana";
        }
    }else if(user === "papel"){  // papel
        if(computer === "piedra"){
            return "computador gana";
        }
        else{
            return "usuario gana";
        }
    }else if(user === "tijera"){  // tijera
        if(computer === "papel"){
            return "computadora gana";
        }
        else{
            return "usuario gana";
        }
    }
}
console.log(result(op1, op3));

var result2 = function(user, computer){
    if (user === computer){
        return op4; // empate
    }else if(user === op1 && computer === op2){
        return "computadora gana";
    }else if(user === op1 && computer === op3){
        return "usuario gana";
    }else if(user === op2 && computer === op1){
        return "usuario gana";
    }else if(user === op2 && computer === op3){
        return "computadora gana";
    }else if(user === op3 && computer === op1){
        return "computadora gana";
    }else if(user === op3 && computer === op2){
        return "usuario gana";
    }

}

console.log(result2(op1, op1));

var result3 = function(user, computer){
    if (user === computer){
        return op4; // empate
    }else {
        if(user == "piedra" && computer =="tijera"){
            return "usuario gana";
        } else {
            if(user == "papel" && computer =="piedra"){
                return "usuario gana";
            } else {
                if(user == "tijera" && computer =="papel"){
                    return "usuario gana";
                } else {
                    return "computadora gana";
                }
            }
        }
    }
}

console.log(result3(op2, op3));

function game(user, computer){
    switch(user, computer){
        case user === computer:
            console.log("empate");
            break;
        case user == "piedra" && computer =="tijera":
            console.log("usuario gana");
            break;
        case user == "papel" && computer =="piedra":
            console.log("usuario gana");
            break;
        case user == "tijera" && computer == "papel":
            console.log("usuario gana");
            break;
        default:
            console.log("computadora gana");
    }
}

game(op2, op2)