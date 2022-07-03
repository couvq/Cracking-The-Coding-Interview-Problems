const URLify = require('./URLify');

test('empty string is returns empty string', () => {
    expect(URLify('')).toBe('');
  });

  test(`'hello world' should return 'hello%20world'`, () => {
    expect(URLify('hello world')).toBe('hello%20world');
  });

  test(`' ' should return '%20'`, () => {
    expect(URLify(' ')).toBe('%20');
  });

  test(`'  ' (two spaces) should return '%20%20'`, () => {
    expect(URLify('  ')).toBe('%20%20');
  });