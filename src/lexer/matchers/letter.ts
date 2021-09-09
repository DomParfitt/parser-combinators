import { matchValue } from './value';

/**
 * Matches a single alphabetical letter from the beginning of a string as an 'Ident' token.
 * @returns
 */
const letter = matchValue((value) => (/[a-zA-z]/.test(value) ? 'Ident' : undefined));

export { letter };
