import { PasswordValidatorError } from "./types";

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
    const errors = [];

    if (!PasswordValidator.hasDigits(password)) {
      errors.push({
        type: PasswordValidatorError.MISSING_DIGIT,
      });
    }

    if (!PasswordValidator.hasUpperCaseLetter(password)) {
      errors.push({
        type: PasswordValidatorError.MISSING_UPPER_CASE_LETTER,
      });
    }

    if (!PasswordValidator.hasValidLength(password)) {
      errors.push({
        type: PasswordValidatorError.INVALID_LENGTH,
      });
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}
