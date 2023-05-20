export class PasswordValidator {
  static DIGITS_REG_EX = /\d/;
  static UPPER_CASE_LETTER_REG_EX = /[A-Z]/;
  static MINIMUM_LENGTH = 5;
  static MAXIMUM_LENGTH = 15;

  static hasDigits(password: string): boolean {
    return PasswordValidator.DIGITS_REG_EX.test(password);
  }

  static hasUpperCaseLetter(password: string): boolean {
    return PasswordValidator.UPPER_CASE_LETTER_REG_EX.test(password);
  }

  static hasValidLength(password: string): boolean {
    return password.length >= PasswordValidator.MINIMUM_LENGTH && password.length <= PasswordValidator.MAXIMUM_LENGTH;
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

    if (!PasswordValidator.hasValidLength(password)) {
      return {
        isValid: false,
        errors: [{
          type: 'invalid-length',
        }],
      }
    }

    return {
      isValid: true,
      errors: [],
    };
  }
}
