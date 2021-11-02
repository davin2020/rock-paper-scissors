// add event listeners to all 3 images
//change this to modern format, whcih returne a collection? eg  document.querySelectorAll or elem.querySelector(css) - see https://javascript.info/searching-elements-dom
let playerIconRock = document.getElementById("iconRock");
playerIconRock.addEventListener("click", function() {
	// console.log('Rock event listener');
  	startGame("rock");
});
let playerIconPaper = document.getElementById("iconPaper");
playerIconPaper.addEventListener("click", function() {
	// console.log('Paper event listener');
  	startGame("paper");
});
let playerIconScissors = document.getElementById("iconScissors");
playerIconScissors.addEventListener("click", function() {
	// console.log('Scissors event listener');
  	startGame("scissors");
});

let playAgain = document.getElementById("btnPlayAgain");
playAgain.addEventListener("click", function() {
  	resetGame();
});

//only scoring for player1, the user, is required
var player1Score = 0;
var player2Score = 0; 

function startGame(userChosenIcon) {
	let player1Icon = userChosenIcon;
	//hide the icon-images that the user can choose from
	updateElementWithImage("iconRock", "");
	updateElementWithImage("iconPaper", "");
	updateElementWithImage("iconScissors", "");

	hideDiv("div_icons");

	//show text and image of what user has picked
	showDiv("div_user_icon");

		//dynammmic borders
	// let targetImage = document.getElementById("userIconImage");
	// event.target.classList.toggle('icon_border');

	updateElementWithContent("userIcon", player1Icon);
	updateElementWithImage("userIconImage", player1Icon);

	console.log('about to call setTimeout');
	//wait 2 secs before displayng what the house has randomly picked
	setTimeout(() => {
		let player2Icon = chooseRandomItem();
		showDiv("div_house_icon");
		updateElementWithContent("houseIcon", player2Icon);
		updateElementWithImage("houseIconImage", player2Icon);

		// 2 sec delay until results/score are shown
		setTimeout(() => {
			let result = determineWinner(player1Icon, player2Icon);
			// console.log('Result: ' + result);
			updateElementWithContent("resultMessage", result);
			updateElementWithContent("userScore", player1Score);
			// console.log('Player 1 Score - User: ' + player1Score);
			// console.log('Player 2 Score - House: ' + player2Score);
		}, 1500);
		//1.5 sec timeout
	}, 1500);
}

//removes chosen icons, images, and result text, but sscore is still displayed
function resetGame() {
	showDiv("div_icons");
	hideDiv("div_user_icon");
	hideDiv("div_house_icon");
	

	//show the icon-images that the user can choose from
	updateElementWithImage("iconRock", "rock");
	updateElementWithImage("iconPaper", "paper");
	updateElementWithImage("iconScissors", "scissors");

	//remove the previouslly picked icons and images
	updateElementWithContent("userIcon", "_");
	updateElementWithImage("userIconImage", "_");
	updateElementWithContent("houseIcon", "_");
	updateElementWithImage("houseIconImage", "_");
	updateElementWithContent("resultMessage", "_");
}

// const targetDiv = document.getElementById("third");
// targetDiv.style.display = "block"; or none
// id must be unique
// ()
// let playAgain = document.getElementById("btnPlayAgain");
// playAgain.addEventListener("click", function() {
//   	resetGame();
// });
//id must be unique - could toggle instead?
function hideDiv(divID){
	const targetDiv = document.getElementById(divID);
	console.log(targetDiv);
	// targetDiv.style.display = "none"; 
	targetDiv.style.display = "none";
}
function showDiv(divID){
	const targetDiv = document.getElementById(divID);
	console.log(targetDiv);
	// targetDiv.style.display = "none"; 
	targetDiv.style.display = "block";
}


function updateElementWithImage(element, icon) {
	let targetImage = document.getElementById(element);
	console.log("targetImage ");
	console.log(targetImage);
	// targetImage.className = " icon_border icon_size color_rock center";
	// icon is now empty string or
	console.log("ICON " + icon);
	if (icon == "rock") {
		// document.getElementById(element).src = "images/icon-rock.svg";

		//added 31 oct - works ok to put border around chosen icon, but may still  be off center? and need to remove the classes/border when no longer needed, or should border by combined w image??
	// let targetImage = document.getElementById(element);
		targetImage.src = "images/icon-rock.svg";
		// now add border class to img? <img id="userIconImage"> 
		// targetImage.classList.add("icon_border color_rock");
		//this option let u add multiple classes - needs leading space, ohterwise name get combined wth prev/last class name! - TODO remember to remove the class later or multiple instance of same class will be there  or hide the div!
		
		//when to remove theese added classses? in ELSE clause. need specific ones for each icon! 
		targetImage.className = " icon_border icon_size color_rock center";
		// <img id="iconRock" src="images/icon-rock.svg" class="icon_border icon_size color_rock center" >

		// Toggles the existence of a class in an element’s list of classes.
		// event.target.classList.toggle('icon_border')
	}
	else if (icon == "paper") {
		// document.getElementById(element).src = "images/icon-paper.svg";
		targetImage.src = "images/icon-paper.svg";
		targetImage.className = " icon_border icon_size color_paper center";
	}
	else if (icon == "scissors") {
		// document.getElementById(element).src = "images/icon-scissors.svg";
		targetImage.src = "images/icon-scissors.svg";
		targetImage.className = " icon_border icon_size color_scissors center";
	}
	// <img id="iconPaper" src="images/icon-paper.svg" class="icon_border icon_size color_paper">
	// <img id="iconScissors" src="images/icon-scissors.svg" class="icon_border icon_size color_scissors center">

	//else remove the image if icon is empty string
	//REVIEW maybe dont need to rmeove clases if i just hide th whole div?
	else {
		// document.getElementById(element).src = "";
		targetImage.src = "";

		// let targetImage2 = document.getElementById(element);
		targetImage.className -= " icon_border icon_size color_rock center";
		console.log("removed classes from targetImage ");
		console.log(targetImage);
	}
}

function updateElementWithContent(element, content) {
	console.log('displayUserItem element: ' + element);
	console.log('displayUserItem content: ' + content);
	document.getElementById(element).innerHTML = content;
}


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
		//player 1 ie User wins
		winner = 'You Win!!';
		player1Score ++;
	}
	//player 2 ie House wins
	else if (doesXBeatY(player2Item, player1Item)) {
		winner = 'You Lose, beaten by the House!';
		// player2Score ++;
		player1Score --;
	}
	else {
		winner = "It's a Draw!";
	}
	return winner;
}


//call the functions
// console.log('ROUND 1 - ');
// let player1 = chooseRandomItem();
// let player2 = chooseRandomItem();
// console.log('player 1: ' + player1);
// console.log('player 2: ' + player2);

// //comapre players items
// var player1Score = 0;
// var player2Score = 0;
// let result2 = determineWinner(player1, player2);
// console.log('Result 2: ' + result2);

// //check the actual score
// console.log('Round 1 player1Score: ' + player1Score);
// console.log('Round 1 player2Score: ' + player2Score);


// // round 2 - this totally works and the score covers both rounds
// console.log('\nROUND 2 - ');
// let player11 = chooseRandomItem();
// let player22 = chooseRandomItem();
// console.log('player 11: ' + player11);
// console.log('player 22: ' + player22);
// let result3 = determineWinner(player11, player22);
// console.log('Result 3: ' + result3);
// console.log('Round 2 Score player1Score: ' + player1Score);
// console.log('Round 2 Score player2Score: ' + player2Score);

