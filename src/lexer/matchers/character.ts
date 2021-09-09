import { matchValue } from './value';

/**
 * Matches a single given character from the beginning of a string as an 'Ident' token.
 * @param c the character to match
 * @returns
 */
const character = (c: string) => matchValue((value) => (value === c ? 'Ident' : undefined));

export { character };
