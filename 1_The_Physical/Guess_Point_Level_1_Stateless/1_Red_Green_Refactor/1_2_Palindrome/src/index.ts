const ANY_NON_ALPHABET_CHARACTERS_REG_EXP = /[^A-Z]/ig;

export function palindrome(text: string) {
  if (text.length < 3) {
    return false;
  }

  const parsedText = text.toLowerCase().replace(ANY_NON_ALPHABET_CHARACTERS_REG_EXP, '');
  const reversedText = parsedText.split('').reverse().join('');

  if (parsedText === reversedText) {
    return true;
  }

  return false;
}
