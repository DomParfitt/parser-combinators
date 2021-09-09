import { or } from '../combinators';
import { fold } from '../helpers';
import { TokenKind } from '../token';
import { word } from './word';

/**
 * Maps keywords to their matching TokenKind
 */
const keywords: { [keyword: string]: TokenKind } = {
  func: 'Func',
};

/**
 * Matches any keyword from a string as its own token kind.
 * @returns
 */
const keyword = or(...Object.entries(keywords).map(([key, value]) => fold(word(key), value)));

export { keyword };
