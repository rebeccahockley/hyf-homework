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

myButton.onclick = function (event) {
  if (inputText.length > 0) {
    const section = document.querySelector("section");
    const p = document.createElement("p");
    const randomNumber = Math.floor(Math.random() * spiritAnimalArray.length);
    p.innerText = inputText + " - " + spiritAnimalArray[randomNumber];
    section.appendChild(p);
  } else {
    const section = document.querySelector("section");
    const p = document.createElement("p");
    p.innerText = "Please input your name to generate your spirit animal.";
    section.appendChild(p);
  }
};

const myInput = document.querySelector("input");
myInput.oninput = function (event) {
  inputText = event.target.value;
};
