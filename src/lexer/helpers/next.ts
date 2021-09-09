import { peek } from './peek';
import { MatchResult } from '../result';

const next = (input: string): MatchResult<string> => {
  const value = peek(input);

  if (!value) {
    return {
      remaining: input,
    };
  }

  return {
    value,
    remaining: input.substring(1),
  };
};

export { next };
