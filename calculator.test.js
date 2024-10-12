const add = require("./calculator");

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test('should return 1 for the string "1"', () => {
  expect(add("1")).toBe(1);
});

test('should return the sum of two numbers', () => {
    expect(add("1,5")).toBe(6);
});