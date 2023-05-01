import { isPalindrome } from '.'

describe('palindrome tests', () => {
  it('Returns a boolean', () => {
    expect(typeof isPalindrome('mom')).toBe('boolean');
  })

  it.each([['mom'], ['Mom'], ['Mo m'], ['Was It A Rat I Saw'], ['Never Odd or Even'], ['Never ¢#!?%$ Odd * Or 98 EvEn']])("Knows that %p is a palindrome", (text) => {
    expect(isPalindrome(text)).toBeTruthy();
  })

  it("Knows that 'Not a palindrome' is not a palindrome", () => {
    expect(isPalindrome('Not a palindrome')).toBeFalsy();
  })
})
