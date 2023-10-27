/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// bluit in functions
function reverseString(text) {
    return text.split("").reverse().join("")
}

//ES6 version
function reverseString(text) {
    return [...text].reverse().join('')
}

// for loop
function reverseString(text) {
    let result = ""

    for (let i = text.length -1; i >= 0; i--){
    result += text[i]
    }
    return result
}

// for of used in ES6
function reverseString(text) {
    let result = "";

    for(let char of text){
        result = char + result
    }

    return result;
}

// recursion

function reverseString(text) {
    if (text === "") {
        return ""
    }else{
        return reverseString(text.substr(1)) + text[0]
    }
    
}

// using reduce 

function reverseString(text) {
    return text.split("").reduce((acc,char) =>  char + acc, '')
}

// using ES6
function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc , '')
}


module.exports = reverseString