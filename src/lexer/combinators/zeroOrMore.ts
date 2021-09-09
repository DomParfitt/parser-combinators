import { MatchResult } from '../result';
import { Token } from '../token';

const zeroOrMore = (parser: (input: string) => MatchResult<Token>): ((input: string) => MatchResult<Token[]>) => {
  return (input) => {
    let remaining = input;
    const values = [];

    do {
      const { remaining: r, value } = parser(remaining);
      if (!value) {
        break;
      }

      remaining = r;
      values.push(value);
    } while (true);

    return {
      value: values,
      remaining,
    };
  };
};

export { zeroOrMore };
