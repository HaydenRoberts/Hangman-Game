var allWords = ["ball"];
var currentWord = document.getElementById("word");
var word = "";
var guessAmount = document.getElementById("guess-amount");
var guessedLetters = document.getElementById("guessed-letters");
var guessCount = 9;
var letters = [];

//console.log(currentWord);
//console.log(word);

allWords[0].split('');
//console.log(allWords[0].split(''));

for (i = 0; i < allWords[0].length; i++) {
    word += "_ ";
};
var splitWord = word.split('');
//console.log(word.split(''));

currentWord.innerHTML = word;


// console.log(word[0] + word[1]);
document.onkeyup = function (event) {

    var userInput = event.key;
    console.log(userInput);
    // console.log(allWords[0]);
    if (allWords[0] === "ball") {
        if (userInput === "b") {
            //word.replace('_', 'b');
            splitWord.splice(0, 1, 'b');
            splitWord.join("");
            console.log(splitWord);
            currentWord.innerHTML = splitWord;
            

        } else if (userInput === "a") {
            // currentWord.innerHTML = (word[2] = allWords[0][1]);
            splitWord.splice(2, 1, 'a');
            currentWord.innerHTML = splitWord;

            //console.log(splitWord);

        } else if (userInput === "l") {
            splitWord.splice(4, 1, 'l');
            splitWord.splice(6, 1, 'l');
            currentWord.innerHTML = splitWord;
        } else {
            // console.log(userInput);
            // console.log(letters);
            // Stores key pressed and guesses get subtracted by 1
            if (letters.includes(userInput)) {
                console.log("HEY DUDE!")
            } else {
                letters.push(userInput);
                guessedLetters.innerHTML = letters;
                //Subtract 1 from guesses if user guess wrong
                guessAmount.textContent = guessCount--;
                if (guessCount === 0){
                    reset();
                } else {

                }
            }
            // guessedLetters.innerHTML = event.key;
            // guessAmount.innerHTML = guessCount--;
        }


    } else {

    }
}

function reset (){
    for (i = 0; i < allWords[0].length; i++) {
        word += "_ ";
    };
    guessCount = 10;
    letters = [];

}