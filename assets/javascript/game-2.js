var allWords = ["ball", "cleats", "soccer", "field", "goaltender", "defenseman"];
var currentWord = document.getElementById("word");
var underScores = "";
var guessAmount = document.getElementById("guess-amount");
var guessedLetters = document.getElementById("guessed-letters");
var guessCount = 9;
var letters = [];
var randomWord = randomWord();
var splitRandomWord = randomWord.split('')
var input = '';


allWords[0].split('');
//console.log(randomWord.split(''));

for (i = 0; i < splitRandomWord.length; i++) {
    underScores += "_";
};

// Splitting underscores
var splitWord = underScores.split('');


// Current word being guessed
currentWord.innerHTML = underScores;

// Random Word generator
function randomWord() {
    var randomNum = Math.floor(Math.random() * allWords.length);
    console.log(allWords[randomNum]);
    return allWords[randomNum];
}


var letterGuessed = document.getElementById("guessed-letters");
input = letterGuessed.value;
console.log(letterGuessed);
// Guess Function
function isLetterInWord(letter, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (letter == arr[i]) {
            console.log(i);
            splitWord.splice(i, 1, letter);
            console.log(splitWord);
            currentWord.innerHTML = splitWord;
        }
    }
    return (-1);
}

function storeLetter(letter, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (letter == arr[i]) {
            return true;
        }
    }
    return false;
}



// When user clicks a letter
document.onkeyup = function (event) {

    var userInput = event.key;
    // var letterPosition;
    console.log(userInput);
    // letterPosition = isLetterInWord(userInput, splitRandomWord);
    // for (letterPosition > (-1)) {}
    if (isLetterInWord(userInput, splitRandomWord) === (-1)) {
        if (letters.includes(userInput)) {
            console.log("This letter is already here")
        } else if (storeLetter(userInput, splitRandomWord)) {
            //console.log(i);
        } else {
            letters.push(userInput);
            guessedLetters.innerHTML = letters;
            console.log("THIS WORKS!")
            guessAmount.textContent = guessCount--;
        }
    } else {
        console.log("THIS WORKS!")
        // console.log(i);
    }
}
