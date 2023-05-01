import { PasswordValidator } from '.';

/* 
  Password validator (#passwordValidator)
  Write a function (or a class) for validating passwords. Passwords must meet the following criteria: 

  - Between 5 and 15 characters long
  - Contains at least one digit
  - Contains at least one upper case letter
  - Return an object containing a boolean result and an errors key that — when provided with an invalid password — contains an error message or type for all errors in occurrence. There can be multiple errors at a single time.

  Examples:

  - "1234" is invalid
  - "123456789123456789D" is invalid
  - "MyPassword" is valid

  Doings:

  - Validates a password by & returns the object containing a boolean result and an errors key

  Knows:

  - A valid password should contain a length that is between 5 and 15 characters long
  - A valid password should contain at least one upper case letter (A-Z)
*/

describe('PasswordValidator tests', () => {
  describe('isValid', () => {
    it('Knows that "lol" has an invalid length', () => {
      const result = PasswordValidator.isValid('lol');

      expect(result.isValid).toBeFalsy();
      expect(result.errors[0].type).toBe('InvalidLength');
      expect(result.errors[0].message).toBe('The password should be between 5 and 15 characters long');
    })
  })
})

