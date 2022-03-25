const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");

const redTargetX = 20 - parseInt(redBox.style.left);
const redTargetY = 300 - parseInt(redBox.style.top);
const blueTargetX = 400 - parseInt(blueBox.style.left);
const blueTargetY = 300 - parseInt(blueBox.style.top);
const greenTargetX = 400 - parseInt(greenBox.style.left);
const greenTargetY = 20 - parseInt(greenBox.style.top);

function translateOneByOne() {
  moveElement(redBox, {
    x: redTargetX,
    y: redTargetY,
  })
    .then(() => console.log("Red Box moved"))
    .then(() =>
      moveElement(blueBox, {
        x: blueTargetX,
        y: blueTargetY,
      })
    )
    .then(() => console.log("Blue Box moved"))
    .then(() =>
      moveElement(greenBox, {
        x: greenTargetX,
        y: greenTargetY,
      })
    )
    .then(() => console.log("Green Box moved"));
}

translateOneByOne();

//Comment out whichever you'd like to use

// function translateAllAtOnce() {
//   try {
//     const redBoxPromise = moveElement(redBox, {
//       x: redTargetX,
//       y: redTargetY,
//     });
//     const blueBoxPromise = moveElement(blueBox, {
//       x: blueTargetX,
//       y: blueTargetY,
//     });
//     const greenBoxPromise = moveElement(greenBox, {
//       x: greenTargetX,
//       y: greenTargetY,
//     });
//     Promise.all([redBoxPromise, blueBoxPromise, greenBoxPromise]).then(() => {
//       console.log("All elements have been moved");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// translateAllAtOnce();
