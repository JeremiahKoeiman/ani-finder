/**
 * Checks if a value is not `undefined`.
 *
 * This type guard function takes a value that may be `undefined` and returns `true`
 * if the value is not `undefined`, and `false` otherwise.
 *
 * @template T - The type of the value being checked.
 * @param {T | undefined} value - The value to check.
 * @returns {value is T} `true` if the value is not `undefined`, `false` otherwise.
 *
 * @example
 * const value: number | undefined = 5;
 * if (notUndefined(value)) {
 *   console.log(value); // Output: 5
 * }
 */
export function notUndefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

/**
 * Checks if a value is not `null`.
 *
 * This type guard function takes a value that may be `null` and returns `true`
 * if the value is not `null`, and `false` otherwise.
 *
 * @template T - The type of the value being checked.
 * @param {T | null} value - The value to check.
 * @returns {value is T} `true` if the value is not `null`, `false` otherwise.
 *
 * @example
 * const value: number | null = 5;
 * if (notNull(value)) {
 *   console.log(value); // Output: 5
 * }
 */
export function notNull<T>(value: T | null): value is T {
  return value !== null;
}

/**
 * Checks if a value is neither `null` nor `undefined`.
 *
 * This type guard function takes a value that may be `null` or `undefined` and returns `true`
 * if the value is neither `null` nor `undefined`, and `false` otherwise.
 *
 * @template T - The type of the value being checked.
 * @param {T | null | undefined} value - The value to check.
 * @returns {value is T} `true` if the value is neither `null` nor `undefined`, `false` otherwise.
 *
 * @example
 * const value: number | null | undefined = 5;
 * if (notNullUndefined(value)) {
 *   console.log(value); // Output: 5
 * }
 */
export function notNullUndefined<T>(value: T | null | undefined): value is T {
  return value !== undefined && value !== null;
}
