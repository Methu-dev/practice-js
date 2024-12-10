let switchInput = document.getElementById("switchInput")

let day = prompt("enter your day name:");
let lowercase =day.toLocaleLowerCase();
switch(lowercase){
    case "saturday":{
        switchInput.innerText = "bank off day";
        break
    } 
    
    case "friday":{
        switchInput.innerText="bangladesh day off";
        break
    }
  
    case "sunday":{
        switchInput.innerText="open school";
        break  
    }
    
    case "monday":{
        switchInput.innerText="start work";
        break  
    } 
    
    default:{
        alert("you are wrong input");
        
    }
}

