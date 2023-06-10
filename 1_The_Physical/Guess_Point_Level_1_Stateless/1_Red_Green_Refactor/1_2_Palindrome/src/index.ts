export function isPalindrome(text: string) {
  const parsedText = text.toLowerCase().split(' ').join('');
  const reversedText = parsedText.split('').reverse().join('');

  if (parsedText === reversedText) {
    return true;
  }

  return false;
}
