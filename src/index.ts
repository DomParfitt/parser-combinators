import { tokenize } from './lexer';

const main = () => {
  try {
    const tokens = tokenize('1234 + 2 * 3 - 4 / 5 hello123 func 12.34\n abc');
    console.log(tokens);
  } catch (err) {
    console.error(err.message);
  }
};

main();
