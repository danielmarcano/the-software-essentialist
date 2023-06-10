import { isPalindrome } from '.'

describe('isPalindrome tests', () => {
  it('Returns a boolean', () => {
    expect(typeof isPalindrome('')).toBe('boolean');
  })

  it.each([['mom'], ['Mom'], ['MoM'], ['Mo m'], ['xMomx'], ['Was It A Rat I Saw'], ['Never Odd or Even'], ['1Never Odd or Even1']])('Knows that %p is a palindrome', (text) => {
    expect(isPalindrome(text)).toBeTruthy();
  })

  it.each([['Momx'], ['Never Odd or Even1']])('Knows that %p is not a palindrome', (text) => {
    expect(isPalindrome(text)).toBeFalsy();
  })
})
