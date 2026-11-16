const MAX_LENGTH = 80;

const SEED = [
  "It works on my machine.",
  "Have you tried turning it off and on again?",
  "There is no cloud, just someone else's computer.",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "When people look under the hood... we want them to perceive that professionals have been at work. If instead they see a scrambled mass of code that looks like it was written by a bevy of drunken sailors,then they are likely to conclude that the same inattention to detail pervades every other aspect of the project."
];

function validateQuote(text) {
  if (typeof text !== "string" || text.trim() === "") {
    return "text is required";
  }
  if (text.length > MAX_LENGTH) {
    return `text must be at most ${MAX_LENGTH} characters (got ${text.length})`;
  }
  return null;
}

function createQuoteStore(seed = SEED) {
  const quotes = seed.map((text, i) => ({ id: i + 1, text }));

  return {
    all: () => quotes,
    random: () => quotes[Math.floor(Math.random() * quotes.length)],
    add(text) {
      const quote = { id: quotes.length + 1, text: text.trim() };
      quotes.push(quote);
      return quote;
    },
  };
}

module.exports = { MAX_LENGTH, SEED, validateQuote, createQuoteStore };
