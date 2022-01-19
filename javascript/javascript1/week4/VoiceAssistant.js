const nameList = [];

function getCommand(name) {
  if (nameList.includes(name) === false) {
    nameList.push(name);
    console.log("Nice to meet you " + name);
  } else {
    console.log("Nice to meet you " + name);
  }
}

console.log(nameList);
getCommand("Benjamin");
getCommand("Hannah");
getCommand("Benjamin");
console.log(nameList);
