const isUnique = require('./isUnique');

test('empty array is unique', () => {
    expect(isUnique([])).toBe(true);
  });

  test('array without duplicates is unique', () => {
      const uniqueString = "hi";

    expect(isUnique(uniqueString)).toBe(true);
  });

  test('array with duplicates is not unique', () => {
    const nonUniqueString = "anna";

    expect(isUnique(nonUniqueString)).toBe(false);
  });