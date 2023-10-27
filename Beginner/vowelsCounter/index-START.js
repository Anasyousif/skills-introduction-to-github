/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

const Vowles = ["a","e","i","o","u"]
function vowelsCounter(text) {
    // initialize counter
    let counter = 0;
    
    
    // loop through text to test if each chataecter is a vowel
    for (let letter of text.toLowerCase())
    if (Vowles.includes(letter)) {
        counter++
    }
    // Return the number of vow3els
    return counter
}

/*
 Using Regular Expressions to count the number of vowels in a string of text.
 */

 function vowelsCounter(text) {
    // Search the text withinRgex and store al the matching instances
    let matchingInstances = text.match(/[aeiou]/gi);

    // Check if matching instances exist then calculate length
    if (matchingInstances) {
        // Return the number of vowels
        return matchingInstances.length

    } else {
        return 0
    }
 }






module.exports = vowelsCounter;
