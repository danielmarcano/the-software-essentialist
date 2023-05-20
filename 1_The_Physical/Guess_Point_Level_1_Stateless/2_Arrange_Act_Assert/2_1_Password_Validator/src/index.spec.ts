import { PasswordValidator } from './';

describe('PasswordValidator tests', () => {
  describe('It knows passwords should be between 5 and 15 characters long', () => {
    it('Knows that "Lal0" has an invalid length', () => {
      expect(PasswordValidator.isValid('Lal0')).toEqual({
        isValid: false,
        errors: [{
          type: 'invalid-length'
        }]
      })
    })

    it('Knows that "Lal0Lal0Lal0Lal0Lal0Lal0Lal0Lal0" has an invalid length', () => {
      expect(PasswordValidator.isValid('Lal0Lal0Lal0Lal0Lal0Lal0Lal0Lal0')).toEqual({
        isValid: false,
        errors: [{
          type: 'invalid-length'
        }]
      })
    })
  })

  describe('It knows passwords should contain at least one digit', () => {
    it('Knows that "Lalao" is missing a digit', () => {
      expect(PasswordValidator.isValid('Lalao')).toEqual({
        isValid: false,
        errors: [{
          type: 'missing-digit'
        }]
      })
    })
  });

  describe('It knows passwords should contain at least one upper case letter', () => {
    it('Knows that "lala0" is missing an upper case letter', () => {
      expect(PasswordValidator.isValid('lala0')).toEqual({
        isValid: false,
        errors: [{
          type: 'missing-upper-case-letter'
        }]
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

