const peek = (input: string): string | undefined => {
  if (input.length === 0) {
    return;
  }

  return input.charAt(0);
};

export { peek };
