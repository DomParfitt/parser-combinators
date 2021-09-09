import { MatchResult } from '../result';
import { Token } from '../token';
import { zeroOrMore } from './zeroOrMore';

const oneOrMore = (parser: (input: string) => MatchResult<Token>): ((input: string) => MatchResult<Token[]>) => {
  return (input) => {
    const { remaining, value } = zeroOrMore(parser)(input);

    if (!value || value.length === 0) {
      return {
        remaining,
      };
    }

    return {
      value,
      remaining,
    };
  };
};

export { oneOrMore };
