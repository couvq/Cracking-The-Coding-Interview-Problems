const longestPalindrome = require('./longestPalindrome');

test('empty string returns empty string', () => {
    expect(longestPalindrome('')).toBe('');
});

test('aa returns aa', () => {
    expect(longestPalindrome('aa')).toBe('aa');
});

test('aba returns aba', () => {
    expect(longestPalindrome('aba')).toBe('aba');
});

test('anna returns anna', () => {
    expect(longestPalindrome('anna')).toBe('anna');
});

test('babad returns bab', () => {
    expect(longestPalindrome('babad')).toBe('bab');
});