import { PasswordValidator } from './';

describe('PasswordValidator tests', () => {
  describe('It knows passwords should be between 5 and 15 characters long', () => {
    it('Knows that "lal0" has an invalid length', () => {
      expect(PasswordValidator.isValid('lal0')).toEqual({
        isValid: false,
        errors: [{
          type: 'invalid-length'
        }]
      })
    })
  })
})

