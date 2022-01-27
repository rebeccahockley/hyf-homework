const arrayOfRandomWords = [
  "coffee",
  "bananas",
  "week",
  "whiteboard",
  "eye",
  "mouse",
];

function findTheShortestWord(words) {
  let lengthOfWord = words[0].length;
  let indexOfWord = 0;
  for (let i = 0; i < words.length; i++) {
    // console.log("Length of shortest " + lengthOfWord);
    // console.log("Length of StringWord " + words[i].length);
    if (lengthOfWord > words[i].length) {
      lengthOfWord = words[i].length;
      indexOfWord = i;
    }
  }
  return "The shortest word is: " + words[indexOfWord];
}

console.log(findTheShortestWord(arrayOfRandomWords));
