import { digit } from '../../../src/lexer/matchers/digit';

describe('digit', () => {
  it('matches a string containing a single digit', () => {
    const input = '1';

    const { remaining, value } = digit(input);

    expect(value?.value).toBe('1');
    expect(value?.kind).toBe('Num');
    expect(remaining).toBe('');
  });

  it('matches a single digit from a string of digits', () => {
    const input = '123';

    const { remaining, value } = digit(input);

    expect(value?.value).toBe('1');
    expect(value?.kind).toBe('Num');
    expect(remaining).toBe('23');
  });

  it('matches a single digit from a string containing a digit followed by non-digits', () => {
    const input = '1 abc';

    const { remaining, value } = digit(input);

    expect(value?.value).toBe('1');
    expect(value?.kind).toBe('Num');
    expect(remaining).toBe(' abc');
  });

  it('does not match the empty string', () => {
    const input = '';

    const { remaining, value } = digit(input);

    expect(value).toBeUndefined();
    expect(remaining).toBe('');
  });

  it('does not match beginning with a non-digit', () => {
    const input = 'a1';

    const { remaining, value } = digit(input);

    expect(value).toBeUndefined();
    expect(remaining).toBe('a1');
  });
});
