import { capitalize } from './string-utils';

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should return an empty string unchanged', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle already capitalized strings', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('should handle single character strings', () => {
    expect(capitalize('a')).toBe('A');
  });
});
