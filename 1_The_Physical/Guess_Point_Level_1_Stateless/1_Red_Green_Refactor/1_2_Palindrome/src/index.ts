export function palindrome(text: string) {
  const parsedText = text.toLowerCase().replace(/ /g, '');
  const reversedText = parsedText.split('').reverse().join('');

  if (parsedText === reversedText) {
    return true;
  }

  return false;
}
