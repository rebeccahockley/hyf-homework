function tempFunct(multiple1, multiple2) {
  for (let i = 1; i <= 100; i++) {
    if (i % multiple1 == 0 && i % multiple2 == 0) {
      console.log("FizzBuzz");
    } else if (i % multiple1 == 0) {
      console.log("Fizz");
    } else if (i % multiple2 == 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}

tempFunct(2, 5);
