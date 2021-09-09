import { next } from '../helpers';
import { MatchResult } from '../result';
import { Token, TokenKind } from '../token';

const matchValue = (matcher: (value: string) => TokenKind | undefined): ((input: string) => MatchResult<Token>) => {
  return (input) => {
    const { value, remaining } = next(input);
    if (!value) {
      return {
        remaining,
      };
    }

    const kind = matcher(value);

    if (!kind) {
      return {
        remaining: input,
      };
    }

    return {
      value: {
        kind,
        value,
      },
      remaining,
    };
  };
};

export { matchValue };
