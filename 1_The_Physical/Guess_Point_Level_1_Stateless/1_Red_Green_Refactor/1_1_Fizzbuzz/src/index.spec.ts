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

describe("fizzBuzz tests", () => {
  it("Outputs a string", () => {
    expect(typeof fizzBuzz(0)).toBe("string");
  });

  it("Outputs the given number as a string", () => {
    expect(fizzBuzz(1)).toBe("1");
  });

  it("Knows that 3 is equal to 'Fizz'", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("Knows that 5 is equal to 'Buzz'", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
});
