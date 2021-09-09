import { digit } from '.';
import { and, or, zeroOrMore } from '../combinators';
import { fold, foldT } from '../helpers';
import { TokenKind } from '../token';
import { letter } from './letter';

/**
 * Matches an identifier from a string as an 'Ident' token.
 * An identifier is defined as a letter followed by zero or more letters or digits.
 * @returns
 */
const identifier = fold(and(letter, zeroOrMore(or(letter, digit))), 'Ident');

const ident = and(letter, zeroOrMore(or(letter, digit)));

const identifier2 = foldT(and(letter, zeroOrMore(or(letter, digit))), (first, second) => {
  return {
    kind: 'Ident' as TokenKind,
    value: first.value + second.value,
  };
});

export { identifier };
