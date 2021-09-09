import { number } from '../../../src/lexer/matchers/number';

describe('number', () => {
  it('matches a string containing a single number', () => {
    const input = '1';

    const { remaining, value } = number(input);

    expect(value?.value).toBe('1');
    expect(value?.kind).toBe('Num');
    expect(remaining).toBe('');
  });

  it('matches a number from a string of numbers', () => {
    const input = '123';

    const { remaining, value } = number(input);

    expect(value?.value).toBe('123');
    expect(value?.kind).toBe('Num');
    expect(remaining).toBe('');
  });

  it('matches a number from a string containing numbers followed by non-numbers', () => {
    const input = '123 abc';

    const { remaining, value } = number(input);

    expect(value?.value).toBe('123');
    expect(value?.kind).toBe('Num');
    expect(remaining).toBe(' abc');
  });

  it('does not match the empty string', () => {
    const input = '';

    const { remaining, value } = number(input);

    expect(value).toBeUndefined();
    expect(remaining).toBe('');
  });

  it('does not match beginning with a non-number', () => {
    const input = 'a1';

    const { remaining, value } = number(input);

    expect(value).toBeUndefined();
    expect(remaining).toBe('a1');
  });
});
