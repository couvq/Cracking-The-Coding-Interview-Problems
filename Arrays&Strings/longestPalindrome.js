const longestPalindrome = (s) => {
    let longestSubstring = '';
    
    if(s.length <= 1) return s;
    
    // Brute force
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j <= s.length; j++) {
            let substring = s.substring(i, j);
            let length = substring.length;
            
            if(isPalindrome(substring) && substring.length > longestSubstring.length) {
                longestSubstring = substring;
            }
        }
    }
    
    return longestSubstring;
};

const isPalindrome = (s) => {
    let reverse = [];
    for(let i = s.length - 1; i >= 0; i--) {
        reverse.push(s[i]);
    }
    
    reverse = reverse.join('');
    
    return s === reverse;
}

module.exports = longestPalindrome;