const isUnique = require('./isUnique');

test('empty array is unique', () => {
    expect(isUnique([])).toBe(true);
  });