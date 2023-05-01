export class PasswordValidator {
  static UPPERCASE_REG_EX: RegExp = /[A-Z]/g;

  static isValid(text: string) {
    const hasAtLeastOneUppercaseLetter = PasswordValidator.UPPERCASE_REG_EX.test(text);

    if (text.length < 5 || text.length > 15) {
      return {
        isValid: false,
        errors: [{
          type: 'InvalidLength',
          message: 'The password should be between 5 and 15 characters long'
        }],
      }
    }

    if (!hasAtLeastOneUppercaseLetter) {
      return {
        isValid: false,
        errors: [{
          type: 'MissingUppercaseLetter',
          message: 'The password should have at least one uppercase letter'
        }],
      };
    }

    return {
      isValid: true,
      errors: [],
    };
  }
}
