import { palindrome } from '.'

/*
  Create a palindrome checker that should be able to detect that a string is a palindrome; that is, it is the
  same word or phrase in reverse.This means that words like "mom" and "wow" palindromes. It also means that words
  like "bill" are not palindromes. It should still know that something is a palindrome, even if the casing is off
  (that means that "Mom" is still a palindrome). Lastly, it should also be able to detect palindromes
  in phrases like "Was It A Rat I Saw" and "Never Odd or Even" too.

  Use-cases

  - It returns a boolean if the given string is a palindrome (it is the same word or phrase in reverse) regardless of:
    - casing
    - spaces between words

  Edge-cases

  - What happens with special characters and numbers? It might be best to remove them all so that we only run our logic against letters
  - For strings smaller than 3 digits, we simply return false
*/


describe('palindrome tests', () => {
  it('Returns a boolean', () => {
    expect(typeof palindrome('mom')).toBe('boolean');
  })

  it("Knows that 'mom' is a palindrome", () => {
    expect(palindrome('mom')).toBe(true);
  })

  it("Knows that 'Mom' is a palindrome", () => {
    expect(palindrome('Mom')).toBe(true);
  })

  it("Knows that 'Mo m' is a palindrome", () => {
    expect(palindrome('Mo m')).toBe(true);
  })

  it("Knows that 'Was It A Rat I Saw' is a palindrome", () => {
    expect(palindrome('Was It A Rat I Saw')).toBe(true);
  })

  it("Knows that 'Not a palindrome' is not a palindrome", () => {
    expect(palindrome('Not a palindrome')).toBe(false);
  })
})
