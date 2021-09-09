import { identifier } from '../../../src/lexer/matchers/identifier';

describe('identifier', () => {
  it('matches an identifier containing only letters', () => {
    const input = 'fooBar';

    const { remaining, value } = identifier(input);

    expect(value?.kind).toBe('Ident');
    expect(value?.value).toBe('fooBar');
    expect(remaining).toEqual('');
  });

  it('matches an identifier containing letters and numbers', () => {
    const input = 'foo123';

    const { remaining, value } = identifier(input);

    expect(value?.kind).toBe('Ident');
    expect(value?.value).toBe('foo123');
    expect(remaining).toEqual('');
  });

  it('does not match strings beginning with a number', () => {
    const input = '1foo';

    const { remaining, value } = identifier(input);

    expect(value).toBeUndefined();
    expect(remaining).toEqual(input);
  });

  it('does not match strings beginning with symbols', () => {
    const input = '+foo';

    const { remaining, value } = identifier(input);

    expect(value).toBeUndefined();
    expect(remaining).toEqual(input);
  });

  it('does not match the empty string', () => {
    const input = '';

    const { remaining, value } = identifier(input);

    expect(value).toBeUndefined();
    expect(remaining).toEqual(input);
  });
});
