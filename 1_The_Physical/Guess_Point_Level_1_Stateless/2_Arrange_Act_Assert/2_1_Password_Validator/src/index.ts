type ValidationError = {
  type: string;
  message: string;
}

type ValidationResult = {
  isValid: boolean;
  errors: ValidationError[];
}

export class PasswordValidator {
  static UPPERCASE_REG_EX: RegExp = /[A-Z]/g;

  static isValid(text: string): ValidationResult {
    const errors = [];

    const hasAtLeastOneUppercaseLetter = PasswordValidator.UPPERCASE_REG_EX.test(text);

    if (text.length < 5 || text.length > 15) {
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
