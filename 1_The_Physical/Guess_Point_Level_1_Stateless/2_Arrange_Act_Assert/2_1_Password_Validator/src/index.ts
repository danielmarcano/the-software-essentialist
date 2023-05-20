export class PasswordValidator {
  static DIGITS_REG_EX = /\d/;
  static UPPER_CASE_LETTER_REG_EX = /[A-Z]/;

  static hasDigits(password: string): boolean {
    return PasswordValidator.DIGITS_REG_EX.test(password);
  }

  static hasUpperCaseLetter(password: string): boolean {
    return PasswordValidator.UPPER_CASE_LETTER_REG_EX.test(password);
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

    if (!PasswordValidator.hasUpperCaseLetter(password)) {
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
