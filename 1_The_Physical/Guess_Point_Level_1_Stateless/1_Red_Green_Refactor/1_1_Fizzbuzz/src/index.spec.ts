import { fizzBuzz } from "./fizzbuzz";

describe("fizzBuzz tests", () => {
  it("Outputs a string", () => {
    expect(typeof fizzBuzz(0)).toBe("string");
  });

  it.each([[1], [43]])("Outputs %p as a string", (numberToConvert) => {
    expect(fizzBuzz(numberToConvert)).toBe(String(numberToConvert));
  });

  it.each([[3], [9], [42]])("Knows that %p outputs 'Fizz'", (numberToConvert) => {
    expect(fizzBuzz(numberToConvert)).toBe("Fizz");
  });

  it("Knows that 5 is equal to 'Buzz'", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it.each([[15], [45]])("Knows that %p outputs 'FizzBuzz'", (numberToConvert) => {
    expect(fizzBuzz(numberToConvert)).toBe("FizzBuzz");
  });

  it.each([[0], [101], [102], [-12]])("Knows that %p is an invalid number", (numberToConvert) => {
    expect(fizzBuzz(numberToConvert)).toBe("");
  });

  it("Knows that 'hello' is an invalid number", () => {
    expect(fizzBuzz('hello' as unknown as number)).toBe("");
  });
});
