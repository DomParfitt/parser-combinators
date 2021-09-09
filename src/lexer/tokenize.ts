import { or } from './combinators';
import { peek } from './helpers';
import { symbol, keyword, whitespace, number, identifier } from './matchers';
import { MatchResult } from './result';
import { Token } from './token';

/**
 * Tokenize an input string into an array of Tokens
 * @param input the input string
 * @returns an array of Tokens
 * @throws if it is unable to tokenize the entire string, i.e. it encounters an unexpected
 *         character
 */
const tokenize = (input: string): Token[] => {
  const { value = [], remaining } = tokenizeHelper(input);

  if (remaining.length !== 0) {
    throw new Error(`Unexpected token '${peek(remaining)}' at position ${input.length - remaining.length}`);
  }

  return value;
};

const tokenizeHelper = (input: string): MatchResult<Token[]> => {
  const { value, remaining } = or(symbol, number, keyword, identifier, whitespace)(input);
  if (!value) {
    return {
      value: [],
      remaining,
    };
  }

  const { value: tokens = [], remaining: r } = tokenizeHelper(remaining);

  return {
    value: [value, ...tokens].filter((token) => token.kind !== 'Whitespace'),
    remaining: r,
  };
};

export { tokenize };
