/**
 * Trims the specified character from the end of a string.
 *
 * This function takes a string and a character, and removes all occurrences
 * of the specified character from the end of the string.
 *
 * @param {string} str - The string to trim.
 * @param {string} ch - The character to remove from the end of the string.
 * @returns {string} A new string with the specified character removed from the end.
 *
 * @example
 * const result = trimEnd('helloooo', 'o');
 * console.log(result); // Output: 'hell'
 */
export const trimEnd = (str: string, ch: string): string => {
  let end = str.length;

  while (end > 0 && str[end - 1] === ch) {
    end -= 1;
  }

  return end < str.length ? str.substring(0, end) : str;
};

/**
 * Trims the specified character from the start of a string.
 *
 * This function takes a string and a character, and removes all occurrences
 * of the specified character from the start of the string.
 *
 * @param {string} str - The string to trim.
 * @param {string} ch - The character to remove from the start of the string.
 * @returns {string} A new string with the specified character removed from the start.
 *
 * @example
 * const result = trimStart('aaahello', 'a');
 * console.log(result); // Output: 'hello'
 */
export const trimStart = (str: string, ch: string): string => {
  let start = 0;

  while (start < str.length && str[start] === ch) {
    start += 1;
  }

  return start > 0 ? str.substring(start, str.length) : str;
};

/**
 * Trims the specified character from both the start and end of a string.
 *
 * This function takes a string and a character, and removes all occurrences
 * of the specified character from both the start and end of the string.
 *
 * @param {string} str - The string to trim.
 * @param {string} ch - The character to remove from the start and end of the string.
 * @returns {string} A new string with the specified character removed from both the start and end.
 *
 * @example
 * const result = trimString('aaahellooooaaa', 'a');
 * console.log(result); // Output: 'helloooo'
 */
export const trimString = (str: string, ch: string): string => {
  return trimStart(trimEnd(str, ch), ch);
};
