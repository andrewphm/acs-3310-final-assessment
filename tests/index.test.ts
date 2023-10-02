import formatPhoneNumber from '../src/index';

describe('formatPhoneNumber', () => {
  test('should format phone number', () => {
    expect(formatPhoneNumber('1234567890')).toBe('(123) 456-7890');
  });

  test('should return null if phone number is invalid', () => {
    expect(formatPhoneNumber('123456789')).toBeNull();
  });

  test('should clean and format phone number', () => {
    expect(formatPhoneNumber('123 456-7890')).toBe('(123) 456-7890');
  });
});
