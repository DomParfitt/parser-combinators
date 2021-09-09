import { MatchResult } from '../result';
import { Token } from '../token';

const or = (...parsers: ((input: string) => MatchResult<Token>)[]): ((input: string) => MatchResult<Token>) => {
  return (input) => {
    for (const parser of parsers) {
      const { value, remaining } = parser(input);
      if (value) {
        return {
          value,
          remaining,
        };
      }
    }

    return {
      remaining: input,
    };
  };
};

export { or };
