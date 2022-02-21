// Array with 3 items which are all functions. Iterate through and call all functions

const arrayOfFunctions = [firstFunction, secondFunction, thirdFunction];

function firstFunction() {
  console.log("Function 1");
}
function secondFunction() {
  console.log("Function 2");
}
function thirdFunction() {
  console.log("Function 3");
}

for (let i = 0; i < arrayOfFunctions.length; i++) {
  arrayOfFunctions[i]();
}

// As a variable, and not

const functionAsAVariable = function () {
  console.log("This is a variable");
};

functionAsAVariable();

function notAVariable() {
  console.log("This is not a variable ");
}

notAVariable();

// Functions in an object

const objectWithAFunction = {
  sum: function (a, b) {
    return a + b;
  },
};

console.log(objectWithAFunction.sum(8, 4));
