import { isPalindrome } from '.'

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
  - Since strings like "Was It A Rat I Saw" should return true, we should remove any white-spaces
  - For strings smaller than 3 digits, we simply return false
*/


describe('isPalindrome tests', () => {
  it('Returns a boolean', () => {
    expect(typeof isPalindrome()).toBe('boolean');
  })

  it('Knows that "mom" is a palindrome', () => {
    expect(typeof isPalindrome('mom')).toBe(true);
  })
})
