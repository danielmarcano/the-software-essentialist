export function palindrome(text: string) {
  if (text.length < 3) {
    return false;
  }

  const parsedText = text.toLowerCase().replace(/ /g, '');
  const reversedText = parsedText.split('').reverse().join('');

  if (parsedText === reversedText) {
    return true;
  }

  return false;
}
