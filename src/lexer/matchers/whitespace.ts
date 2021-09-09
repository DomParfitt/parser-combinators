import { matchValue } from './value';

/**
 * Matches a single whitespace character from the beginning of a string as a 'Whitespace' token.
 * @returns
 */
const whitespace = matchValue((value) => (value.trim().length === 0 ? 'Whitespace' : undefined));

export { whitespace };
