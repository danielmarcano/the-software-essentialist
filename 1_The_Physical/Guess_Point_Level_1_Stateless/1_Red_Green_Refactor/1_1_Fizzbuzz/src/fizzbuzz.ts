/**
 *
 * @param numberToConvert A number between 1 and 100
 *
 */
export function fizzBuzz(numberToConvert: number) {
  if (numberToConvert < 1 || numberToConvert > 100) {
    return "Invalid number";
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
