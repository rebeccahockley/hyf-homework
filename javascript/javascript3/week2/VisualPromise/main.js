const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");

const redTarget = {
  x: 20 - parseInt(redBox.style.left),
  y: 300 - parseInt(redBox.style.top),
};
const blueTarget = {
  x: 400 - parseInt(blueBox.style.left),
  y: 300 - parseInt(blueBox.style.top),
};
const greenTarget = {
  x: 400 - parseInt(greenBox.style.left),
  y: 20 - parseInt(greenBox.style.top),
};

// function translateOneByOne() {
//   moveElement(redBox, redTarget)
//     .then(() => console.log("Red Box moved"))
//     .then(() => moveElement(blueBox, blueTarget))
//     .then(() => console.log("Blue Box moved"))
//     .then(() => moveElement(greenBox, greenTarget))
//     .then(() => console.log("Green Box moved"));
// }

// translateOneByOne();

// Comment out whichever you'd like to use

function translateAllAtOnce() {
  const movements = [
    moveElement(redBox, redTarget),
    moveElement(blueBox, blueTarget),
    moveElement(greenBox, greenTarget),
  ];
  Promise.all(movements).then(() => {
    console.log("All elements have been moved");
  });
}

translateAllAtOnce();
