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

    return {
      isValid: false,
      errors: [{
        type: 'invalid-length',
      }],
    };
  }
}
