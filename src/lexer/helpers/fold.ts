import { MatchResult } from '../result';
import { Token, TokenKind } from '../token';

const fold = (
  parser: (input: string) => MatchResult<Token[]>,
  kind?: TokenKind,
): ((input: string) => MatchResult<Token>) => {
  return (input) => {
    const { remaining, value } = parser(input);
    if (!value) {
      return {
        remaining,
      };
    }

    const token = value.reduce((acc, curr) => {
      return {
        kind: kind || curr.kind,
        value: acc.value + curr.value,
      };
    });

    return {
      value: token,
      remaining,
    };
  };
};

const foldT = <T>(
  parser: (input: string) => MatchResult<T[]>,
  combine: (first: T, second: T) => T,
): ((input: string) => MatchResult<T>) => {
  return (input) => {
    const { remaining, value } = parser(input);
    if (!value) {
      return {
        remaining,
      };
    }

    const token = value.reduce((acc, curr) => {
      return combine(acc, curr);
    });

    return {
      value: token,
      remaining,
    };
  };
};

export { fold, foldT };
