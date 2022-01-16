function getWordScore(sentence, negativeWords, positiveWords) {
  let PositiveWords = [
    "happy",
    "exciting",
    "wonderful",
    "brilliant",
    "magical",
    "thrilling",
    "positive",
  ];
  if (positiveWords == undefined) {
    positiveWords = PositiveWords;
  }

  let NegativeWords = [
    "bad",
    "boring",
    "angry",
    "gross",
    "hate",
    "horrible",
    "stupid",
    "dumb",
  ];
  if (negativeWords == undefined) {
    negativeWords = NegativeWords;
  }
  let score = 0;
  for (let i = 0; i < positiveWords.length; i++) {
    if (sentence.includes(positiveWords[i])) {
      score++;
    }
  }
  for (let i = 0; i < negativeWords.length; i++) {
    if (sentence.includes(negativeWords[i])) {
      score--;
    }
  }
  return score;
}

console.log(
  getWordScore(
    "This is happy and stupid",
    ["bad", "This"],
    ["thrilling", "stupid"]
  )
);
