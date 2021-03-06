// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.


var Letter = function(newChar) {
    this.character = newChar; //   * A string value to store the underlying character for the letter
    this.guessed = false; //   * A boolean value that stores whether that letter has been guessed yet
    this.getChar = function() {
        if (this.guessed == true) {
            return this.character;
        } else {
            return "_";
        }
    } //   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

    this.checkCharGuess = function(charGuess) {
        // console.log("Letter.checkCharGuess: Start of function. charGuess: "+ charGuess);
        if (this.character == charGuess) {
            this.guessed = true;
            // return true; //true= the guess was a match
        } else {
            // return false; //false= the guess was not a match
            //the returns here are so the logic of the game in the "Word.js" file can determine directly if the letter guess was correct
            // so word1.checkCharGuess("a") as a whole would return /true/ if "a" is included
            //there may be a better way to accomplish this in the higher-level file, so commenting out for now actually
        }
    } //   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
}

//TESTING SECTION
// var testing = new Letter("a");
// console.log("This is the result of the Letter constructor: " )
// console.log(testing);

module.exports = Letter;