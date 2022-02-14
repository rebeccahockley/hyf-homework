const myButton = document.querySelector("button");
let inputText;
const spiritAnimalArray = [
  "The Icy Bison",
  "The Swift Armadillo",
  "The Miniature Buffalo",
  "The Capable Quail",
  "The Gleaming Pig",
  "The Enthusiastic Crane",
  "The Amusing Penguin",
  "The Sparkling Reindeer",
  "The Expensive Caterpillar",
  "The Intelligent Pony",
];

const section = document.querySelector("section");
const p = document.createElement("p");
const randomNumber = Math.floor(Math.random() * spiritAnimalArray.length);

myButton.onclick = function () {
  if (inputText) {
    p.innerText = inputText + " - " + spiritAnimalArray[randomNumber];
  } else {
    p.innerText = "Please input your name to generate your spirit animal.";
  }

  section.appendChild(p);
};