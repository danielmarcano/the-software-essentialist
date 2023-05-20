import { PasswordValidator } from './';
import { PasswordValidatorError } from './types';

describe('PasswordValidator tests', () => {
  describe('It knows passwords should be between 5 and 15 characters long', () => {
    it('Knows that "Lal0" has an invalid length', () => {
      expect(PasswordValidator.isValid('Lal0')).toEqual({
        isValid: false,
        errors: [{
          type: PasswordValidatorError.INVALID_LENGTH
        }]
      })
    })

    it('Knows that "Lal0Lal0Lal0Lal0Lal0Lal0Lal0Lal0" has an invalid length', () => {
      expect(PasswordValidator.isValid('Lal0Lal0Lal0Lal0Lal0Lal0Lal0Lal0')).toEqual({
        isValid: false,
        errors: [{
          type: PasswordValidatorError.INVALID_LENGTH
        }]
      })
    })
  })

  describe('It knows passwords should contain at least one digit', () => {
    it('Knows that "Lalao" is missing a digit', () => {
      expect(PasswordValidator.isValid('Lalao')).toEqual({
        isValid: false,
        errors: [{
          type: PasswordValidatorError.MISSING_DIGIT
        }]
      })
    })
  });

  describe('It knows passwords should contain at least one upper case letter', () => {
    it('Knows that "lala0" is missing an upper case letter', () => {
      expect(PasswordValidator.isValid('lala0')).toEqual({
        isValid: false,
        errors: [{
          type: PasswordValidatorError.MISSING_UPPER_CASE_LETTER
        }]
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
    expect(PasswordValidator.isValid('Lala0')).toEqual({
      isValid: true,
      errors: []
    })
  })
})

