import { PasswordValidatorError } from "./types";

export class PasswordValidator {
  static hasDigits(password: string): boolean {
    const DIGITS_REG_EX = /\d/;

    return DIGITS_REG_EX.test(password);
  }

  static hasUpperCaseLetter(password: string): boolean {
    const UPPER_CASE_LETTER_REG_EX = /[A-Z]/;

    return UPPER_CASE_LETTER_REG_EX.test(password);
  }

  static hasValidLength(password: string): boolean {
    const MINIMUM_LENGTH = 5;
    const MAXIMUM_LENGTH = 15;

    return password.length >= MINIMUM_LENGTH && password.length <= MAXIMUM_LENGTH;
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
