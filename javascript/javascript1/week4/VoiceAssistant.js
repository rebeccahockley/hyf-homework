let myCommand = [];
const namesOfUser = [];
const toDoList = [];
const todayDate = new Date();
const jokesArray = [
  "Why you never see elephants hiding up in trees? Because they are really good at it!",
  "Why are koalas not actual bears? The do not meet the koalafications!",
  "What is red and moves up and down? A tomato in an elevator!",
  "How does NASA organize a party? They planet!",
  "How does the ocean say good morning? It waves!",
];

function getReply(command) {
  myCommand = command.split(" ");
  if (myCommand[0] == "Hello" && namesOfUser.includes(myCommand[4]) === false) {
    namesOfUser.push(myCommand[4]);
    console.log("Nice to meet you " + namesOfUser[0]);
  } else if (
    myCommand[0] == "Hello" &&
    namesOfUser.includes(myCommand[4]) === true
  ) {
    console.log("Nice to meet you " + namesOfUser[0]);
  }
  if (myCommand[0] == "Add") {
    let note = [];
    for (let i = 1; i < myCommand.length - 3; i++) {
      note.push(myCommand[i]);
    }
    note = note.join(" ");
    toDoList.push(note);
    console.log(note + " added to your to do list");
  }
  if (myCommand[0] == "Remove") {
    let removeKeyWords = myCommand.splice(1, myCommand.length - 4);
    removeKeyWords = removeKeyWords.join(" ");
    console.log(removeKeyWords);
    for (let i = 0; i < toDoList.length; i++) {
      if (toDoList[i] === removeKeyWords) {
        toDoList.splice(i, 1);
      }
    }
  }
  if (myCommand[0] == "Tell") {
    const randomNumber = Math.floor(Math.random() * jokesArray.length);
    console.log(jokesArray[randomNumber]);
  }
  if (myCommand[0] == "Set") {
    if (myCommand[2] == "timer") {
      console.log("Timer set for " + myCommand[4] + " minutes");
      time = parseInt(myCommand[4]) * 60000;
      const timeOutCountdown = setTimeout(function countdown() {
        console.log("Timer Done!");
      }, time);
    }
  }
  if (myCommand[0] == "What") {
    if (command == "What is my name?" && (namesOfUser == 0) === false) {
      console.log("Your name is " + namesOfUser[0]);
    } else if (command == "What is my name?" && (namesOfUser == 0) === true) {
      console.log("You have not told me your name! Please tell me your name!");
    }
    if (command == "What day is it today?") {
      console.log(todayDate.toDateString());
    }
    if (command == "What is on my todo?") {
      console.log("Your to do list is:");
      for (let i = 0; i < toDoList.length; i++) {
        console.log(toDoList[i]);
      }
    }
  }
}

// getReply("Hello my name is Benjamin");
// getReply("Add singing in the shower to my todo");
// getReply("Add shop for groceries to my todo");
// getReply("Add go fishing to my todo");
// console.log(toDoList);
// getReply("What is on my todo?");
// getReply("Tell me a joke");
// console.log(toDoList);

// getReply("Set a timer for 1 minutes");
