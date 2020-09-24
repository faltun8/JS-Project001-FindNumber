
const randomNumber = Math.ceil(Math.random()*100)
console.log("random: " + randomNumber);
let counter = 0
document.querySelector("#inp").addEventListener("keyup", eventFinder)

function eventFinder() {
    if (event.which === 13) {
        getNumber()
    }
}

function getNumber() {
    let myNumber = document.querySelector("#inp").value;
    if (myNumber < 0 || myNumber>100 ) {
        document.querySelector('#result').innerHTML='Please enter a number between 0 and 100';
    } else {
        checkNumber(myNumber);
    }
}


function upFunc() {
    document.getElementById("inp").stepUp(1);
    getNumber()

}

function downFunc() {
    document.getElementById("inp").stepDown(1);
    getNumber()
}


function checkNumber(myNumber) {
    counter = counter + 1;
    if (myNumber > randomNumber) {
        document.querySelector('#result').innerHTML='THINK LOWER';     
    } else if (myNumber < randomNumber) {
        document.querySelector('#result').innerHTML='THINK HIGHER';
    }else {
        newGame();
    }
}

function newGame() {
    alert(`CONGRADULATIONS!!! You find in ${counter} try.`);
    var txt;
    var r = confirm("Wanna play again?");
    if (r == true) {
        location.reload();
    } else {
        txt = "THANKS! SEE YOU ";
        document.getElementById("counter").innerHTML = "";
        document.getElementById("result").innerHTML = txt;
        window.close();
    }
    
}