/**
 * Capitalizes the first letter of a string.
 *
 * This function takes a string and returns a new string with the first letter
 * capitalized. If the input string is empty, it returns an empty string.
 *
 * @param {string} value - The string to capitalize.
 * @returns {string} A new string with the first letter capitalized.
 *
 * @example
 * const result = capitalize('hello');
 * console.log(result); // Output: 'Hello'
 */
export const capitalize = (value: string): string => (value ? value.charAt(0).toUpperCase() + value.slice(1) : '');
