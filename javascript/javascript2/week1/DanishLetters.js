const danishString = "Blå grød med røde bær";

function findTheDanishLetters(sentence) {
  let numberOfÅ = sentence.match(/[å]/gi) || 0;
  let numberOfÆ = sentence.match(/[æ]/gi) || 0;
  let numberOfØ = sentence.match(/[ø]/gi) || 0;
  if (numberOfÅ != 0) {
    numberOfÅ = numberOfÅ.length;
  }
  if (numberOfÆ != 0) {
    numberOfÆ = numberOfÆ.length;
  }
  if (numberOfØ != 0) {
    numberOfØ = numberOfØ.length;
  }
  totalNumberOfLetters = numberOfÅ + numberOfÆ + numberOfØ;
  console.log(
    "Total: " +
      totalNumberOfLetters +
      ", å: " +
      numberOfÅ +
      ", æ: " +
      numberOfÆ +
      ", ø: " +
      numberOfØ
  );
}

findTheDanishLetters(danishString);
