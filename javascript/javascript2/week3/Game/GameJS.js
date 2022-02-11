// Needs a bit more work so I would be able to sort the leaderboard in highest, to lowest.
// Also have a few questions: It wouldn't work if I declared things like let playerOne = document.getElementById("playerOne").value,
// outside of my functions at the start, so I could keep referring back to them and I'm unsure as to why?
// I can't seem to reset the counters, even though I reset their innerHTML, unsure on that one too - you have to physically reset the page,
// and then you lose the leaderboard

const body = document.querySelector("body");
let sCount = 0;
let lCount = 0;
let timeDurationValue = 0;
let playerOne;
let playerTwo;
const leaderBoardScoresArray = [];

function startGame() {
  let timeDurationValue = document.getElementById("inputbox").value;
  if (timeDurationValue == 0 || timeDurationValue == " ") {
    let alerts = document.getElementById("alerts");
    alerts.innerHTML =
      "Please enter the number of seconds you wish to play for";
  } else {
    startTime(timeDurationValue);
  }
}

function editNames() {
  let playerOne = document.getElementById("playerOne").value;
  let playerTwo = document.getElementById("playerTwo").value;
  document.querySelector("p.nameOne").innerHTML = playerOne;
  document.querySelector("p.nameTwo").innerHTML = playerTwo;
}

const countKeyDowns = (event) => {
  if (event.key === "s") {
    let displaySCount = document.getElementById("displayS");
    sCount++;
    displaySCount.innerHTML = sCount;
  } else if (event.key === "l") {
    let displayLCount = document.getElementById("displayL");
    lCount++;
    displayLCount.innerHTML = lCount;
  }
};

function startTime(timeDurationValue) {
  body.addEventListener("keydown", countKeyDowns);
  setTimeout(() => gameResults(), timeDurationValue * 1000);
}

function gameResults() {
  body.removeEventListener("keydown", countKeyDowns);
  if (sCount > lCount) {
    alerts.innerHTML =
      "The winner is " + document.getElementById("playerOne").value + "!";
    leaderBoardScoresArray.push(
      "Name: " +
        document.getElementById("playerOne").value +
        " Score: " +
        sCount
    );
    leaderboardScores();
  } else if (sCount < lCount) {
    alerts.innerHTML =
      "The winner is " + document.getElementById("playerTwo").value + "!";
    leaderBoardScoresArray.push(
      "Name: " +
        document.getElementById("playerTwo").value +
        " Score: " +
        lCount
    );
    leaderboardScores();
  } else if (sCount === lCount) {
    alerts.innerHTML = "It's a Draw!";
  } else {
    alerts.innerHTML = "Try Again!";
  }
}

function resetGame() {
  body.removeEventListener("keydown", countKeyDowns);
  displayL.innerHTML = "";
  displayS.innerHTML = "";
  alerts.innerHTML = " ";
  document.getElementById("inputbox").value = "";
  document.getElementById("playerOne").value = "";
  document.getElementById("playerTwo").value = "";
  document.querySelector("p.nameOne").innerHTML = "Player One";
  document.querySelector("p.nameTwo").innerHTML = "Player Two";
  console.log(leaderBoardScoresArray);
}

function leaderboardScores() {
  const unorderedList = document.querySelector("ul");
  unorderedList.innerHTML = " ";
  leaderBoardScoresArray.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = "<h3>" + item;
    unorderedList.appendChild(li);
  });
}
