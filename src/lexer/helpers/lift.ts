import { MatchResult } from '../result';
import { Token } from '../token';

const lift = (parser: (input: string) => MatchResult<Token>): ((input: string) => MatchResult<Token[]>) => {
  return (input) => {
    const { remaining, value } = parser(input);
    if (!value) {
      return {
        remaining,
      };
    }

    return {
      value: [value],
      remaining,
    };
  };
};

export { lift };
