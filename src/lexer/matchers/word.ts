import { and } from '../combinators';
import { character } from './character';

/**
 * Matches a sequence of characters (i.e. a string) from the beginning of a string as an array
 * of 'Ident' tokens.
 * @returns
 */
const word = (sequence: string) => and(...sequence.split('').map((c) => character(c)));

export { word };
