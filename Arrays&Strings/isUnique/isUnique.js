/*  Implement an algorithm to determine if a string has all unique characters.
    What if you cannot use additional data structures?
*/


/*
    O(n^2) time, O(1) space
*/
const isUniqueBruteForce = (string) => {
    for(let i = 0; i < string.length; i++) {
        for(let j = 0; j < string.length; j++) {
            if(i === j) j++; // skip current character in evaluation
            if(string[i] === string[j]) return false; // a duplicate exhists
        }
    }
    return true;
}

const isUnique = (string) => {
    return isUniqueBruteForce(string);
}

module.exports = isUnique;