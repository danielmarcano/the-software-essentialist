export function fizzBuzz(numberToConvert: number) {
  if (numberToConvert < 1 || numberToConvert > 100) {
    return "";
  }

  let isMultipleOfThree = numberToConvert % 3 === 0;
  let isMultipleOfFive = numberToConvert % 5 === 0;

  if (isMultipleOfThree && isMultipleOfFive) {
    return "FizzBuzz";
  }

  if (isMultipleOfThree) {
    return "Fizz";
  }

  if (isMultipleOfFive) {
    return "Buzz";
  }

  return String(numberToConvert);
}
