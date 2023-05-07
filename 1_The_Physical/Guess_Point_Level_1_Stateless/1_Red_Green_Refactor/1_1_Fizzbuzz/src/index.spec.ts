import { fizzBuzz } from "./fizzbuzz";

/* 
  Write a function that takes numbers from 1 to 100 and outputs them as a string, but for multiples of three it
  returns “Fizz” instead of the number, and for multiples of five it returns “Buzz.” For numbers that are
  multiples of both three and five, it returns “FizzBuzz.”
  Use-cases:
  - Should not accept numbers below 1, nor above 100
  - Should return a string with the passed number OR;
  - "Fizz" if the number is multiple of three OR;
  - "Buzz" if the number is multiple of five OR;
  - "FizzBuzz" if the number is multiple of both five and three
  Edge-cases:
  - When receiving numbers below 1, it returns "Invalid number"
  - When receiving numbers above 100, it returns "Invalid number"
*/

/*
  3 returns "Fizz"
  5 returns "Buzz
  15 returns "FizzBuzz"
  9 returns "Fizz"
  43 returns ""
  42 returns "Fizz"
  45 returns "FizzBuzz"
  102 returns ""
  -12 returns ""
  any non-number returns ""
*/

describe("fizzBuzz tests", () => {
  it("Outputs a string", () => {
    expect(typeof fizzBuzz(0)).toBe("string");
  });

  it.each([[1], [43]])("Outputs %p as a string", (numberToConvert) => {
    expect(fizzBuzz(numberToConvert)).toBe(String(numberToConvert));
  });

  it.each([[3], [9], [42]])("Knows that %p is equal to 'Fizz'", (numberToConvert) => {
    expect(fizzBuzz(numberToConvert)).toBe("Fizz");
  });

  it("Knows that 5 is equal to 'Buzz'", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("Knows that 15 is equal to 'FizzBuzz'", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("Knows that 0 is an invalid number", () => {
    expect(fizzBuzz(0)).toBe("");
  });

  it("Knows that 101 is an invalid number", () => {
    expect(fizzBuzz(101)).toBe("");
  });

  it("Knows that 'hello' is an invalid number", () => {
    expect(fizzBuzz('hello' as unknown as number)).toBe("");
  });
});
