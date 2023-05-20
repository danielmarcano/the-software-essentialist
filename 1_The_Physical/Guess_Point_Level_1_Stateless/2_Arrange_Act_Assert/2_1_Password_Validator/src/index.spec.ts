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
})

