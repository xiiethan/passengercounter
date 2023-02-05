//Greeting the user
let welcomeMessage = document.getElementById("welcome-el");
let username = "Ethan";
let greeting = "Welcome Back ";
welcomeMessage.innerText = greeting + username;
//for incrementing and saving passengers
let saveEl = document.getElementById("save-el"); 
let countEl = document.getElementById("count-el");
let count = 0;
function increment(){
    console.log("Passenger Added");
    count++;
    countEl.textContent = count;
}

function save(){
    console.log(count);
    let previousCount = count + " - ";
    saveEl.textContent += previousCount;
    count = 0;
    countEl.textContent = 0;
}

//python -m http.server 8000