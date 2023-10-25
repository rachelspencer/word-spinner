//Write a function that takes in a string of one or more words, and returns the same 
//string, but with all five or more letter words reversed (Just like the name of this Kata). 
//Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

//solution

const testWord = "Welcome";
const testSentence = "To be or not to be, that is the question";

// ES6 arrow
// const wordSpinner = word => {
//     const wordToArr = word.split(" ");
    
//     const wordsSpun = wordToArr.map((word) => {
//         if (word.length < 5) {
//             return word
//         } else {
//             return word.split("").reverse().join("")
//         }
//     });

//     return wordsSpun.join(" ");
// };

// ES6 ternary 
const wordSpinner = word => {
    const wordToArr = word.split(" ");
    
    const wordsSpun = wordToArr.map((word) => word.length < 5 ? word : word.split("").reverse().join(""))
        
    return wordsSpun.join(" ");
};

console.log(wordSpinner(testWord))
console.log(wordSpinner(testSentence))