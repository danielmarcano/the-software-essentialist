export class PasswordValidator {
  static isValid(text: string) {
    return {
      isValid: false,
      errors: [{
        type: 'InvalidLength',
        message: 'The password should be between 5 and 15 characters long'
      }],
    }
  }
}
