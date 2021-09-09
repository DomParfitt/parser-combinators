import { matchValue } from './value';

/**
 * Matches a single numerical digit from the beginning of a string as a 'Num' token.
 * @returns
 */
const digit = matchValue((value) => (!!Number.parseInt(value) ? 'Num' : undefined));

export { digit };
