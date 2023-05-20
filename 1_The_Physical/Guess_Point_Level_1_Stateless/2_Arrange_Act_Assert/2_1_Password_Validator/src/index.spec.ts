import { PasswordValidator } from './';
import { PasswordValidatorError } from './types';

describe('PasswordValidator.isValid tests', () => {
  describe('It knows passwords should be between 5 and 15 characters long', () => {
    it.each(['Lal0', 'Lal0Lal0Lal0Lal0Lal0Lal0Lal0Lal0', 'thePhysical1234567'])('Knows that %p has an invalid length', (password) => {
      const result = PasswordValidator.isValid(password);

      expect(result.isValid).toBeFalsy();
      expect(result.errors).toContainEqual({
        type: PasswordValidatorError.INVALID_LENGTH
      })
    })
  })

  describe('It knows passwords should contain at least one digit', () => {
    it.each(['Lalao', 'maxwellTheBe'])('Knows that %p is missing a digit', (password) => {
      const result = PasswordValidator.isValid(password);

      expect(result.isValid).toBeFalsy();
      expect(result.errors).toContainEqual({
        type: PasswordValidatorError.MISSING_DIGIT
      })
    })
  });

  describe('It knows passwords should contain at least one upper case letter', () => {
    it.each(['lala0', 'maxwell1_c'])('Knows that %p is missing an upper case letter', (password) => {
      const result = PasswordValidator.isValid(password);

      expect(result.isValid).toBeFalsy();
      expect(result.errors).toContainEqual({
        type: PasswordValidatorError.MISSING_UPPER_CASE_LETTER
      })
    })
  });

  describe('It knows passwords can be invalid for several reasons', () => {
    it('Knows that "lala" is missing an upper case letter and has an invalid length', () => {
      const result = PasswordValidator.isValid('lala');

      expect(result.isValid).toBeFalsy();
      expect(result.errors).toContainEqual({
        type: PasswordValidatorError.MISSING_DIGIT
      })
      expect(result.errors).toContainEqual({
        type: PasswordValidatorError.MISSING_UPPER_CASE_LETTER
      })
    })
  });

  it('Knows that "Lala0" is a valid password', () => {
    const result = PasswordValidator.isValid('Lala0');

    expect(result.isValid).toBeTruthy();
    expect(result.errors).toHaveLength(0);
  })
})

