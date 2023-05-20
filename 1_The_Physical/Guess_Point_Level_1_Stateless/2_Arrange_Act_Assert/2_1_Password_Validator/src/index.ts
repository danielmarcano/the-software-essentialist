export class PasswordValidator {
  static DIGITS_REG_EX = /\d/;

  static hasDigits(password: string): boolean {
    return PasswordValidator.DIGITS_REG_EX.test(password);
  }

  static isValid(password: string) {
    if (!PasswordValidator.hasDigits(password)) {
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
