const firstWords = [
  "Easy",
  "Awesome",
  "Fantastic",
  "Great",
  "Magical",
  "Nifty",
  "Simple",
  "Jazzy",
  "Helpful",
  "Tremendous",
];
const secondWords = [
  "Clams",
  "Pies",
  "Bees",
  "Fire",
  "Birds",
  "Time",
  "Puzzles",
  "Project",
  "Bananas",
  "Company",
];

const randomNumber = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
const startupNameLength = startupName.length;

console.log(
  "The Startup: " +
    "'" +
    startupName +
    "'" +
    " contains " +
    startupNameLength +
    " characters."
);
