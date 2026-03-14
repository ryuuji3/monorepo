import { capitalize, truncate } from './string-utils';

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

describe('truncate', () => {
  it('should return the string unchanged when within maxLength', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  it('should return the string unchanged when equal to maxLength', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });

  it('should truncate and append ellipsis when exceeding maxLength', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
  });

  it('should handle an empty string', () => {
    expect(truncate('', 5)).toBe('');
  });

  it('should throw when maxLength is negative', () => {
    expect(() => truncate('hello', -1)).toThrow(RangeError);
  });
});
