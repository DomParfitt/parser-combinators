import { digit } from '.';
import { and, oneOrMore, or } from '../combinators';
import { fold } from '../helpers';
import { character } from './character';

/**
 * Matches an integer from a string as a 'Num' token.
 * A number is defined as one or more digits.
 * @returns
 */
const integer = fold(oneOrMore(digit));

/**
 * Matches a floating point number from a string as a 'Num' token.
 * A number is defined as an integer followed by a '.' followed by an integer.
 * @returns
 */
const floatingPoint = fold(and(integer, character('.'), integer));

/**
 * Matches a number from a string as a 'Num' token.
 * A number is defined as a floatingPoint or an integer.
 * @returns
 */
const number = or(floatingPoint, integer);

export { number };
