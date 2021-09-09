import { MatchResult } from '../result';
import { Token } from '../token';

type Parser<T> = (input: string) => MatchResult<T>;

const and = (...parsers: Array<Parser<Token> | Parser<Token[]>>): ((input: string) => MatchResult<Token[]>) => {
  return (input) => {
    const values = [];
    let remaining = input;

    for (const parser of parsers) {
      const { value, remaining: r } = parser(remaining);
      if (!value) {
        return {
          remaining,
        };
      }

      remaining = r;
      values.push(value);
    }

    return {
      value: values.flat(),
      remaining,
    };
  };
};

export { and };
