import { TokenKind } from '../token';
import { matchValue } from './value';

const symbols: { [key: string]: TokenKind } = {
  '+': 'Add',
  '-': 'Sub',
  '*': 'Mult',
  '/': 'Div',
};

const symbol = matchValue((value) => symbols[value]);

export { symbol };
