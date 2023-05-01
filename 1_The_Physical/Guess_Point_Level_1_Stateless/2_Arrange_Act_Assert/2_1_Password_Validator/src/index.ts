import { ValidationResult } from "./types";

export class PasswordValidator {
  static MINIMUM_PASSWORD_LENGTH = 5;
  static MAXIMUM_PASSWORD_LENGTH = 15;

  static UPPERCASE_REG_EX: RegExp = /[A-Z]/g;

  static isValid(text: string): ValidationResult {
    const errors = [];

    const hasAtLeastOneUppercaseLetter = PasswordValidator.UPPERCASE_REG_EX.test(text);

    if (text.length < PasswordValidator.MINIMUM_PASSWORD_LENGTH || text.length > PasswordValidator.MAXIMUM_PASSWORD_LENGTH) {
      errors.push({
        type: 'InvalidLength',
        message: 'The password should be between 5 and 15 characters long'
      });
    }

    if (!hasAtLeastOneUppercaseLetter) {
      errors.push({
        type: 'MissingUppercaseLetter',
        message: 'The password should have at least one uppercase letter'
      });
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}
