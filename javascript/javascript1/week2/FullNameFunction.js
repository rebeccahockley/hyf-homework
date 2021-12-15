function getFullName(firstname, surname, useFormalName) {
  if (useFormalName === true) {
    return "Lord " + firstname + surname;
  } else {
    return firstname + surname;
  }
}

let fullName1 = getFullName("Benjamin", " Hughes", true);
let fullName2 = getFullName("Rebecca", " Hockley", false);

console.log(fullName1, fullName2);

/* To fix the getFullName function so it works for women, I would assume that you
would have not just one checkbox, but two. One for Male, one for Female. So, instead of 
useFormalName, you could have a boolean of if they are male, or not. If true, return "Lord",
else return "Lady" */

