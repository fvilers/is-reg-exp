import isRegExp from "../src/is-reg-exp";

test("should return false for string value", () => {
  expect(isRegExp("this is a string")).toBe(false);
});

test("should return false for number value", () => {
  expect(isRegExp(42)).toBe(false);
});

test("should return false for array value", () => {
  expect(isRegExp([])).toBe(false);
});

test("should return false for object value", () => {
  expect(isRegExp({})).toBe(false);
});

test("should return false for function value", () => {
  expect(isRegExp(() => {})).toBe(false);
});

test("should return true for a regular expression using the literal notation", () => {
  expect(isRegExp(/I'm a RegExp/)).toBe(true);
});
test("should return true for a regular expression using the constructor notation", () => {
  expect(isRegExp(new RegExp("I'm a RegExp"))).toBe(true);
});
