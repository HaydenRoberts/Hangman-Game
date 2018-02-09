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
        } else {
            letters.push(userInput);
            guessedLetters.innerHTML = letters;
            console.log("THIS WORKS!")
            //console.log(i);
        }
    } else {
        console.log("THIS WORKS!")
        // console.log(i);
    }

    if (storeLetter(userInput, splitRandomWord)) {

    } else {
        letters.push(userInput);
        guessedLetters.innerHTML = letters;
        guessAmount.textContent = guessCount--;

    }

    //     // console.log(allWords[0]);
    //     if (allWords[0] === "ball") {
    //         if (userInput === "b") {
    //             //word.replace('_', 'b');
    //             splitWord.splice(0, 1, 'b');
    //             splitWord.join("");
    //             //console.log(splitWord);
    //             currentWord.innerHTML = splitWord;


    //         } else if (userInput === "a") {
    //             // currentWord.innerHTML = (word[2] = allWords[0][1]);
    //             splitWord.splice(2, 1, 'a');
    //             currentWord.innerHTML = splitWord;

    //             //console.log(splitWord);

    //         } else if (userInput === "l") {
    //             splitWord.splice(4, 1, 'l');
    //             splitWord.splice(6, 1, 'l');
    //             currentWord.innerHTML = splitWord;
    //         } else {
    //             // console.log(userInput);
    //             // console.log(letters);
    //             // Stores key pressed and guesses get subtracted by 1
    //             if (letters.includes(userInput)) {
    //                 console.log("HEY DUDE!")
    //             } else {
    //                 letters.push(userInput);
    //                 guessedLetters.innerHTML = letters;
    //                 //Subtract 1 from guesses if user guess wrong
    //                 guessAmount.textContent = guessCount--;
    //                 if (guessCount === 0) {
    //                     reset();
    //                 } else {

    //                 }
    //             }
    //             // guessedLetters.innerHTML = event.key;
    //             // guessAmount.innerHTML = guessCount--;
    //         }


    //     } else {

    //     }
}

function reset() {
    for (i = 0; i < splitRandomWord.length; i++) {
        word += "_ ";
    };
    guessCount = 10;
    letters = [];

}