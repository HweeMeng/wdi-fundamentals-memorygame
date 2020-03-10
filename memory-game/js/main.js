let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
var cardOne = cards[2];
cardsInPlay.push(cardOne);
var cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log("user flipped " + cardsInPlay[0]);
console.log("user flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2)
	{if (cardsInPlay[0] === cardsInPlay[1])
		{alert("You found a mathc!");}
	else {alert("Sorry, try again.")}
	}