var game = {
    wins = 0,
    losses = 0,
    words = ["ball", "field", "cleats"],
    lettersGuessed = [],

    randomWord: function() {
        var randomNum = Math.floor(Math.random()*this.words.length);
        return this.words[randomNum];
    }

    
}

    