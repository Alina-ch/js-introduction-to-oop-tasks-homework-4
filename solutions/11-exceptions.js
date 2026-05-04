export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
const parseJson = (text) => {
  try {
    return JSON.parse(text);
  }
  catch(e) {
    throw new ParseError(e);
  }
};

export {parseJson};
// END
