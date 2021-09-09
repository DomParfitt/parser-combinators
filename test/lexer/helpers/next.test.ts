import { next } from '../../../src/lexer/helpers/next';

describe('next', () => {
  it('should return the input string as `remaining` for an empty string', () => {
    const { remaining, value } = next('');

    expect(value).toBeUndefined();
    expect(remaining).toBe('');
  });

  it('should return the first character as `value` and the rest of the input string as `remaining` for a non-empty string', () => {
    const { remaining, value } = next('foo');

    expect(value).toBe('f');
    expect(remaining).toBe('oo');
  });
});
