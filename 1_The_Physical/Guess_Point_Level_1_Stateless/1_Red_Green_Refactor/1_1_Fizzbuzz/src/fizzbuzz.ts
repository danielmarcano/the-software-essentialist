export function fizzBuzz(numberToConvert: number) {
  let isMultipleOfThree = numberToConvert % 3 === 0;

  if (isMultipleOfThree) {
    return "Fizz";
  }

  return String(numberToConvert);
}
