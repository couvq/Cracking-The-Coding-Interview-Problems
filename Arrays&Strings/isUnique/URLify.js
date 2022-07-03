/* 
    Write a method to replace all spaces in a string with '%20'.
    You may assume that the string has sufficient space at the end to hold the additional characters, 
    and that you are given the "true" length of the string. 
    (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)
*/

const URLify = (string) => {
    // create character array from string, iterate through it then if it is a space replace array index with '%20'
    // return the array.join('');

    const chars = string.split(''); // every character as an array

    for(let i = 0; i < chars.length; i++) {
        let character = chars[i];
        if(character === ' ') chars[i] = '%20'; // replace space with new characters
    }

    return chars.join('');
}

/* 
    This implementation runs with this complexity:
        Time: O(n) where n is the number of characters in the string since we have to iterate through each character
        Space: O(n) space since I stored each character in an array 
        (this could probably be optimized to not store an array of characters, but I thing time would have to be worse since
        this would require adding characters within an array/string within a loop so time would have to be 
        O(n^2) to get space to O(1))
*/

module.exports = URLify;