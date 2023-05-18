let player = {
    name: "Babuji:",
    chips: "$"+1500
}



let cards = [];



let sum = 0;
let hasBlackJack = false;

let isAlive = false;

let message = "";


let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");

let cardsEl = document.getElementById("cards-el");

let playerEL = document.getElementById("player-el");

playerEL.textContent = player.name + " " + player.chips;

console.log(cards);



function renderGame() {

    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards:"

    for (i=0; i<cards.length; i++){
        cardsEl.textContent += " " + cards[i];
    }


    if (sum <= 20) {
        message ="Do you want to draw a new card";
    }
    
    else if ( sum === 21) {
        message = "Wohoo!! Yu ve got Blackjack";
        hasBlackJack = true;
    }
    
    else {
        message = "You re out of blackjack";
        
        isAlive = false;
    }

    messageEl.textContent = message;

}

function getrandomCard() {
    let randomNumer = Math.floor( Math.random() * 13 ) + 1;
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer;
    }

}

function startGame() {
    isAlive = true;
    let firstCard = getrandomCard();
    let secondCard = getrandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;


    renderGame();
}

function newcard() {

    if ( isAlive === true && hasBlackJack === false ) {

        let newCard = getrandomCard();

        sum += newCard;
        cards.push(newCard);
        console.log(cards);
        renderGame();

    }





    
}



// //CASHOUT


// let experience = ["Frontend dev at ambrezent","Graphic designer at Al Majaz","Freelancer","Btech CS"];

// console.log (experience[0]);
// console.log (experience[3]);
// console.log (experience[1]);
// console.log (experience[2]);

// let bioData = ["Name: Shiraz jahafar",23,false];

// console.log(bioData[0]);
// console.log(bioData[1]);
// console.log(bioData[2]);

// let messages = [
//     "mechu,how are you?",
//     "can i connection",
//     "jaada aano"
// ];

// let newMessage = ["orngya gutta?"];

// messages.push(newMessage);

// console.log(messages);
