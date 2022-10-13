

let numberOfDice = parseInt(prompt("Combien de dés veux tu ?"));

// div, class

let divElem = document.createElement("div");
divElem.classList.add("dice");
let parentElem = document.getElementById("player");
parentElem.appendChild(divElem);

// fonction

function getRandomDice(min, max) {
    let random = Math.round(Math.random() * (max - min) + min);    
    return random;    
}
let dice = getRandomDice(1,6)

function howMany() {
    
    numberOfDice = dice;
    
}


howMany()
// play

    if (dice === 1){
        divElem.style.backgroundPositionX = "0px"; 
    }
    else if (dice === 2){
        divElem.style.backgroundPositionX = "100px";
    }
    else if (dice === 3){
        divElem.style.backgroundPositionX = "200px";
    }
    else if (dice === 4){
        divElem.style.backgroundPositionX = "300px";
    }
    else if (dice === 5){
        divElem.style.backgroundPositionX = "400px";
    }
    else if (dice === 6){
        divElem.style.backgroundPositionX = "500px";
    }




