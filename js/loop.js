// const namTAiput = document.getElementById('namTAiput')

// let namTA = +prompt("Enter your valu:");
// if(isNaN(namTA)){
//     alert("only type a number [1~9]");
// }
// else{
//     for(let i = 1; i<=10; i++){
//         // console.log(`${namTA} X ${i} = ${namTA * i}`);
//         namTAiput.innerHTML += `${namTA} X ${i} = ${namTA * i} </br>`
//     }
    
// }



let namTAiput = document.getElementById('namTAiput')
let namTA = +prompt("Enter your Namta:");
if(isNaN(namTA)){
    alert("only type number [1~9]");
}
else{
    for(let i = 1; i<=10; i++){
        // console.log(`${namTA} X ${i} = ${namTA * i}`);
        namTAiput.innerHTML += `${namTA} X ${i} = ${namTA * i} </br>`
    }
}