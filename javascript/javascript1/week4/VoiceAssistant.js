let myCommand = [];
const namesOfUser = [];
const toDoList = [];
const todayDate = new Date();

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
    if (command == "Add fishing to my todo") {
      toDoList.push(myCommand[1]);
      console.log("Fishing added to your to do list");
    }
  }
  if (myCommand[0] == "Set") {
    if (command == "Set a timer for 4 minutes") {
      console.log("Timer set for 4 minutes");
      time = 4 * 60000;
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
  }
}

// getReply("Hello my name is Benjamin");
// console.log(namesOfUser);
getReply("Set a timer for 4 minutes");
