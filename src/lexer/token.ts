type TokenKind = 'Add' | 'Sub' | 'Mult' | 'Div' | 'Num' | 'Ident' | 'Whitespace' | 'Func';

interface Token {
  kind: TokenKind;
  value: string;
}

export { Token, TokenKind };
