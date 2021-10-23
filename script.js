
function chooseRandomItem() {
	let arrayItems = ['rock', 'paper', 'scissors'];
	let chosenItem = arrayItems[Math.floor(Math.random()*arrayItems.length)];
	// console.log(chosenItem);
	return chosenItem;
}

//Rules
// - Paper beats Rock
// - Rock beats Scissors
// - Scissors beats Paper
//Return a boolean for whether x beats y
function doesXBeatY(x, y) {
	if (x == 'paper' && y == 'rock') {
		return true;
	}
	else if (x == 'rock' && y == 'scissors') {
		return true;
	}
	else if (x == 'scissors' && y == 'paper') {
		return true;
	}
	else { 
		return false;
	}
}

//this is better/makes more sense
//how to keep score across multiple games? move scores into a separte function
function determineWinner(player1Item, player2Item) {
	let winner = '';
	if (doesXBeatY(player1Item, player2Item)) {
		winner = 'its player 1 who wins';
		player1Score ++;
	}
	else if (doesXBeatY(player2Item, player1Item)) {
		winner = 'its player 2 who wins';
		player2Score ++;
	}
	else {
		winner = 'it must be a draw';
	}
	return winner;
}


//call the functions
console.log('ROUND 1 - ');
let player1 = chooseRandomItem();
let player2 = chooseRandomItem();
console.log('player 1: ' + player1);
console.log('player 2: ' + player2);

//comapre players items
var player1Score = 0;
var player2Score = 0;
let result2 = determineWinner(player1, player2);
console.log('Result 2: ' + result2);

//check the actual score
console.log('Round 1 player1Score: ' + player1Score);
console.log('Round 1 player2Score: ' + player2Score);


// round 2 - this totally works and the score covers both rounds
console.log('\nROUND 2 - ');
let player11 = chooseRandomItem();
let player22 = chooseRandomItem();
console.log('player 11: ' + player11);
console.log('player 22: ' + player22);
let result3 = determineWinner(player11, player22);
console.log('Result 3: ' + result3);
console.log('Round 2 Score player1Score: ' + player1Score);
console.log('Round 2 Score player2Score: ' + player2Score);