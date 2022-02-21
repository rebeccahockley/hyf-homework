setTimeout(() => console.log("Called after 2.5 seconds"), 2500);

function delayedLogOut(delay, stringToLog) {
  const delayMilliseconds = delay * 1000;
  setTimeout(() => console.log(stringToLog), delayMilliseconds);
}

delayedLogOut(5, "This string logged out after 5 seconds");
delayedLogOut(10, "This string logged out after 10 seconds");
delayedLogOut(2, "This string logged out after 2 seconds");

function clickMeButton() {
  delayedLogOut(5, "Called after 5 seconds");
}

// Planet Logger

const e = function earthLogger() {
  console.log("Earth");
};

const s = function saturnLogger() {
  console.log("Saturn");
};

function planetLogFunction(planets) {
  planets();
}

planetLogFunction(e);
planetLogFunction(s);

// Location Logger

function logLocation() {
  const body = document.querySelector("body");
  const para = document.querySelector("p");

  function successful(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    para.innerHTML = `Your latitude is: ${latitude}, your longitude is: ${longitude}`;
    body.appendChild(para);
  }
  function error(error) {
    para.innerHTML = `Need access to location services`;
    body.appendChild(para);
  }
  if (!navigator.geolocation) {
    error();
  } else {
    navigator.geolocation.getCurrentPosition(successful, error);
  }
}

// Running after delay

function giveMeANumber() {
  console.log(Math.floor(Math.random() * 20));
}

function runAfterDelay(delay, callback) {
  const delayIntoMilliseconds = delay * 1000;
  setTimeout(() => callback(), delayIntoMilliseconds);
}

runAfterDelay(5, giveMeANumber);

//  Double click Checker

document.querySelector("body").addEventListener("dblclick", doubleClicker);

function doubleClicker() {
  const bodyID = document.getElementById("body");
  const paraClick = document.createElement("p");
  paraClick.innerText = "Double Click!";
  bodyID.appendChild(paraClick);
}

// Joke Creator

funnyJokesArray = [
  "Why you never see elephants hiding up in trees? Because they are really good at it!",
  "Why are koalas not actual bears? The do not meet the koalafications!",
  "What is red and moves up and down? A tomato in an elevator!",
  "How does NASA organize a party? They planet!",
  "How does the ocean say good morning? It waves!",
];

badJokesArray = [
  "Why don’t oysters donate to charity? Because they’re shellfish.",
  "What does a baby computer call its father? Data",
  "What did the custodian say when he jumped out of the closet? 'Supplies!'",
  "How does a penguin build its house? Igloos it together.",
  "What does a clock do when it’s hungry? It goes back four seconds.",
];

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke === true) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

function logFunnyJoke() {
  const randomNumber = Math.floor(Math.random() * funnyJokesArray.length);
  console.log(funnyJokesArray[randomNumber]);
}
function logBadJoke() {
  const randomNumber = Math.floor(Math.random() * badJokesArray.length);
  console.log(badJokesArray[randomNumber]);
}

jokeCreator(false, logFunnyJoke, logBadJoke);
jokeCreator(true, logFunnyJoke, logBadJoke);
