const add = require("./calculator");

// Test for empty string input
test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

// Test for a single number input
test('should return 1 for the string "1"', () => {
  expect(add("1")).toBe(1);
});

// Test for two numbers input
test('should return the sum of two numbers', () => {
    expect(add("1,5")).toBe(6);
});

// Test for multiple numbers input
test('should return the sum of multiple numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
});

// Test for handling new lines between numbers
test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});

// Test for custom delimiters
test('should handle custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

// Test for a negative number
test('should throw an error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow('negative numbers not allowed: -2');
});

// Test for multiple negative numbers
test('should throw an error for multiple negative numbers', () => {
    expect(() => add("1,-2,-3")).toThrow('negative numbers not allowed: -2,-3');
});