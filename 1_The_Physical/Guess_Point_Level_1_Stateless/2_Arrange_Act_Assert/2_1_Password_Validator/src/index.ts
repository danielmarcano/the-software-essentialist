export class PasswordValidator {
  static isValid(password: string) {
    return {
      isValid: false,
      errors: [{
        type: 'invalid-length',
      }],
    };
  }
}
