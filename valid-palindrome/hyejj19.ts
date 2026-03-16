function isPalindrome(s: string): boolean {
  const formatted = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversed = formatted.split('').reverse().join('');

  return formatted === reversed;
}
