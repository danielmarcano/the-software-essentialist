# Password validator (#passwordValidator)

> Write a function (or a class) for validating passwords. Passwords must meet the following criteria: 

> Between 5 and 15 characters long
> Contains at least one digit
> Contains at least one upper case letter
> Return an object containing a boolean result and an errors key that — when provided with an invalid password — contains an error message or type for all errors in occurrence. There can be multiple errors at a single time.

Examples:

- 'Lalos' is missing a digit
- 'lal0s' is missing an upper case letter
- 'lal0' is too short
- 'Lalalalalalalala0' is too long
- 'MySecret0' is valid

## Getting started

To set up the project, run the following command:

```bash
npm run install
```

## To run the tests in development mode

To run the tests and have them reload when you save, run the following command:

```bash
npm run test:dev
```
