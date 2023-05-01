import { fizzBuzz } from "./fizzbuzz";

describe("fizzBuzz tests", () => {
  it("Outputs a string", () => {
    expect(typeof fizzBuzz(1)).toBe("string");
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

  it("Knows that 15 is equal to 'FizzBuzz'", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("Knows that 0 is an invalid number", () => {
    expect(fizzBuzz(0)).toBe("Invalid number");
  });

  it.each([[0], [101]])(
    "Knows that %p is an invalid number",
    (numberToConvert) => {
      expect(fizzBuzz(numberToConvert)).toBe("Invalid number");
    }
  );
});
