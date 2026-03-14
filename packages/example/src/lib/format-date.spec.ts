import { formatDate } from './format-date';

describe('formatDate', () => {
  it('should format a date in en-US locale', () => {
    const date = new Date(2024, 0, 15); // January 15, 2024
    expect(formatDate(date)).toBe('January 15, 2024');
  });

  it('should format a date in a different locale', () => {
    const date = new Date(2024, 0, 15);
    const result = formatDate(date, 'fr-FR');
    expect(result).toContain('2024');
  });
});
