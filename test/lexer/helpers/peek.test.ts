import { peek } from '../../../src/lexer/helpers/peek';

describe('peek', () => {
  it('should return `undefined` for an empty string', () => {
    const result = peek('');

    expect(result).toBeUndefined();
  });

  it('should return the first character for a non-empty string', () => {
    const result = peek('foo');

    expect(result).toBe('f');
  });
});
