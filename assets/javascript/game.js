var wordBank = ["finn", "jake", "lemongrab", "beemo","marceline","dungeon","mathematical"]
var theWord = wordBank[Math.floor(Math.random()*wordBank.length)];
console.log(theWord.length)
var lettersOfTheWord = theWord.split("");
var reset = 0
console.log(theWord)
var incorrectGuesses = 0
var guessedLetter=[]
var guessedLetters =[]
var correctLetters = 0
var wins = 0
var losses = 0
	var displayWins = document.getElementById("scoreWins")
	displayWins.innerHTML = wins
	var displayLosses = document.getElementById("scoreLosses")
	displayLosses.innerHTML = losses

	for(i = 0; i < lettersOfTheWord.length; i++) {
		var displayBlankSpace = document.getElementById(i)
			displayBlankSpace.innerHTML = "_"
	}

function radical() {
    document.getElementById("radical").play();
}
function unacceptable() {
    document.getElementById("unacceptable").play();
}

document.onkeyup = function(guess) {
	guessedLetter = guess.key
var displayWins = document.getElementById("scoreWins")
			displayWins.innerHTML = wins
var displayLosses = document.getElementById("scoreLosses")
			displayLosses.innerHTML = losses
var displayClear = document.getElementById("message")
			displayClear.innerHTML = ""

//THIS CODE IS TO RESET THE GAME AFTER A WIN OR A LOSS//	
	if (reset===1) {
		var playAgain = confirm("Would you like to play again?")
		if (playAgain === true) {
			//THIS IS WHERE THE WHOLE GAME GETS RESET EXCEPT THE SCORES--NEED TO COMPLETE//
theWord = wordBank[Math.floor(Math.random()*wordBank.length)];
lettersOfTheWord = theWord.split("");
reset = 0
console.log(theWord)
incorrectGuesses = 0
guessedLetter=[]
guessedLetters =[]
correctLetters = 0

for(i = 0; i < lettersOfTheWord.length; i++) {
		var displayBlankSpace = document.getElementById(i)
			displayBlankSpace.innerHTML = "_"
	}

for(i = 26; i > (lettersOfTheWord.length-1); i=i-1) {
		var clearBlankSpace = document.getElementById(i)
			clearBlankSpace.innerHTML = ""
	}

			reset = 0
	var arbitrary = 0
	var arbitrary2 = 0
//THIS CODE CHECKS TO SEE IF THE USER HAS ALREADY GUESSED THE LETTER THEY ARE PRESSING//
	for (i = 0; i < guessedLetters.length; i++) {
		if(guessedLetter === guessedLetters[i] ) {
			arbitrary = arbitrary + 1} //ARBITRARY = 1 WHEN THAT LETTER HAS ALREADY BEEN GUESSED//
	}
//EXECUTE THIS CODE IF THAT LETTER HAS ALREADY BEEN GUESSED//
	if (arbitrary === 1) {
		console.log("That Letter has already been guessed");
		alert("You already guessed that letter!");
	}
//IF LETTER HAS NOT YET BEEN GUESSED EXECUTE THIS CODE...//
	else {
//THIS CODE PUSHES GUESSED LETTER TO THE GUESSED LETTERS ARRAY//
	guessedLetters.push(guessedLetter);
	console.log(guessedLetters)
//THIS CODE DETERMINES IF THE GUESSED LETTER IS A CORRECT ONE//
	for (i = 0; i < lettersOfTheWord.length; i++) { 
		if(guessedLetter===lettersOfTheWord[i]) {
			var displayCorrectLetter = document.getElementById(i);
			displayCorrectLetter.innerHTML = guessedLetter;
			correctLetters = correctLetters + 1
			var arbitrary2 = 1 //arbitrary2 gets set to 1 if guessed letter is a correct one//	
		} 
	}
//THIS CODE DISPLAYS WINNER AND ADDS ONE TO WINS//
	if(correctLetters === lettersOfTheWord.length) {
		var displayWinner = document.getElementById("message")
			displayWinner.innerHTML = "WINNER!!!!"
			wins=wins +1
			reset = 1
			var displayWins1 = document.getElementById("scoreWins")
				displayWins1.innerHTML = wins
			radical()
				
	}
//THIS CODE ADDS UP THE INCORRECT GUESSES//
	if(arbitrary2 === 0) {
					incorrectGuesses = incorrectGuesses + 1
				}
//THIS CODE DISPLAYS YOU LOOSE AND ADDS ONE TO LOSSES//
	if(incorrectGuesses === 7) {
		losses=losses+1
		console.log("losses "+losses)
		var displayLoser = document.getElementById("message")
			displayLoser.innerHTML = "You Lose."
		reset = 1
		var displayLosses2 = document.getElementById("scoreLosses")
			displayLosses2.innerHTML = losses
			unacceptable()
	}
	}
	
		}
	}
//THIS CODE APPLIES IF GAME IS NOT GETTING RESET--NEED TO COMPLETE--//
	else {

	

	reset = 0
	var arbitrary = 0
	var arbitrary2 = 0
//THIS CODE CHECKS TO SEE IF THE USER HAS ALREADY GUESSED THE LETTER THEY ARE PRESSING//
	for (i = 0; i < guessedLetters.length; i++) {
		if(guessedLetter === guessedLetters[i] ) {
			arbitrary = arbitrary + 1} //ARBITRARY = 1 WHEN THAT LETTER HAS ALREADY BEEN GUESSED//
	}
//EXECUTE THIS CODE IF THAT LETTER HAS ALREADY BEEN GUESSED//
	if (arbitrary === 1) {
		console.log("That letter has already been guessed")
		alert("You already guessed that letter!")
	}
//IF LETTER HAS NOT YET BEEN GUESSED EXECUTE THIS CODE...//
	else {
//THIS CODE PUSHES GUESSED LETTER TO THE GUESSED LETTERS ARRAY//
	guessedLetters.push(guessedLetter);
	console.log(guessedLetters)
//THIS CODE DETERMINES IF THE GUESSED LETTER IS A CORRECT ONE//
	for (i = 0; i < lettersOfTheWord.length; i++) { 
		if(guessedLetter===lettersOfTheWord[i]) {
			var displayCorrectLetter = document.getElementById(i);
			displayCorrectLetter.innerHTML = guessedLetter;
			correctLetters = correctLetters + 1
			var arbitrary2 = 1 //arbitrary2 gets set to 1 if guessed letter is a correct one//	
		} 
	}
//THIS CODE DISPLAYS WINNER AND ADDS ONE TO WINS//
	if(correctLetters === lettersOfTheWord.length) {
		var displayWinner = document.getElementById("message")
			displayWinner.innerHTML = "WINNER!!!!"
			wins=wins +1
			console.log("wins " + wins)
			reset = 1
			var displayWins1 = document.getElementById("scoreWins")
				displayWins1.innerHTML = wins
			radical()
	}
//THIS CODE ADDS UP THE INCORRECT GUESSES//
	if(arbitrary2 === 0) {
					incorrectGuesses = incorrectGuesses + 1
				}
//THIS CODE DISPLAYS YOU LOOSE AND ADDS ONE TO LOSSES//
	if(incorrectGuesses === 7) {
		losses=losses+1
		console.log("losses "+losses)
		var displayLoser = document.getElementById("message")
			displayLoser.innerHTML = "You Lose."
		reset = 1
		var displayLosses2 = document.getElementById("scoreLosses")
			displayLosses2.innerHTML = losses
			unacceptable()
	}
	}
	}
		}