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

/*
    O(n) time, O(1) space
*/
const isUniqueHashTable = (string) => {
    const characterCounts = {}; // keep track of our characters

    for(let i = 0; i < string.length; i++) {
        if(characterCounts.hasOwnProperty(string[i])) return false; // has a duplicate/not unique
        characterCounts[string[i]] = 1;
    }
    return true;
}

const isUnique = (string) => {
    // return isUniqueBruteForce(string);
    return isUniqueHashTable(string);
}

module.exports = isUnique;