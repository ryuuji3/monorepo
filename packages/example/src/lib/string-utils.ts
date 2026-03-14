/**
 * Capitalizes the first letter of a string.
 * @param str - The string to capitalize
 * @returns The capitalized string
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to a maximum length, appending an ellipsis when cut.
 * @param str - The string to truncate
 * @param maxLength - The maximum number of characters to keep (must be >= 0)
 * @returns The truncated string
 */
export function truncate(str: string, maxLength: number): string {
  if (maxLength < 0) throw new RangeError('maxLength must be >= 0');
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}
