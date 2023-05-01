export class PasswordValidator {
  static isValid(text: string) {
    if (text.length >= 5 && text.length <= 15) {
      return {
        isValid: true,
        errors: [],
      };
    }

    return {
      isValid: false,
      errors: [{
        type: 'InvalidLength',
        message: 'The password should be between 5 and 15 characters long'
      }],
    }
  }
}
