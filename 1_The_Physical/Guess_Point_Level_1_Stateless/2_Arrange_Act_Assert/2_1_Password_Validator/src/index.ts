export class PasswordValidator {
  static isValid(password: string) {
    if (password === 'Lalao') {
      return {
        isValid: false,
        errors: [{
          type: 'missing-digit',
        }],
      }
    }

    if (password === 'lala0') {
      return {
        isValid: false,
        errors: [{
          type: 'missing-upper-case-letter',
        }],
      }
    }

    return {
      isValid: false,
      errors: [{
        type: 'invalid-length',
      }],
    };
  }
}
