import { letter } from '../../../src/lexer/matchers/letter';

describe('letter', () => {
  it('matches a string containing a single letter', () => {
    const input = 'a';

    const { remaining, value } = letter(input);

    expect(value?.value).toBe('a');
    expect(value?.kind).toBe('Ident');
    expect(remaining).toBe('');
  });

  it('matches a single letter from a string of letters', () => {
    const input = 'abc';

    const { remaining, value } = letter(input);

    expect(value?.value).toBe('a');
    expect(value?.kind).toBe('Ident');
    expect(remaining).toBe('bc');
  });

  it('matches a single letter from a string containing a letter followed by non-letters', () => {
    const input = 'a 123';

    const { remaining, value } = letter(input);

    expect(value?.value).toBe('a');
    expect(value?.kind).toBe('Ident');
    expect(remaining).toBe(' 123');
  });

  it('does not match the empty string', () => {
    const input = '';

    const { remaining, value } = letter(input);

    expect(value).toBeUndefined();
    expect(remaining).toBe('');
  });

  it('does not match beginning with a non-letter', () => {
    const input = '1a';

    const { remaining, value } = letter(input);

    expect(value).toBeUndefined();
    expect(remaining).toBe('1a');
  });
});
