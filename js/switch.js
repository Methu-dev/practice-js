
let switchCase = document.getElementById("switchCase")
let operation = prompt("satart operation");
let num1 = +prompt("enter your first number:");
let num2 = +prompt("enter your second number");
switch(operation){
    case "sum":{
        switchCase.innerText=(num1 + num2);
        break
    }
    case "devaided":{
        switchCase.innerText=(num1 - num2);
        break
    }
    case "devetion":{
        switchCase.innerText=(num1 / num2);
        break
    }
    case "modulas":{
        switchCase.innerText=(num1 % num2);
        break
    }
    case "multi":{
        switchCase.innerText=(num1 * num2);
        break
    }
    default:{
        switchCase.innerText=("only +, -, *, /, % type");
        
    }
}

// if (operation){
//     console.log(num1 + num2);
//     if(operation){
//         console.log(num1 * num2);
        
//     }
//     if (operation){
//         console.log(num1 / num2);
        
//     }
    
// }