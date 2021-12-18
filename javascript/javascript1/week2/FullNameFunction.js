function getFullName(firstname, surname, useFormalName, gender) {
  if (firstname === "" || surname === "") {
    console.log("Oops! You must enter a name!");
  } else if (useFormalName === true) {
    switch (gender) {
      case "female":
        return "Lady " + firstname + " " + surname;
        break;
      case "male":
        return "Lord " + firstname + " " + surname;
        break;
      default:
        return firstname + " " + surname;
    }
  } else {
    return firstname + " " + surname;
  }
}

const fullName1 = getFullName("Benjamin", "Hughes", true, "male");
const fullName2 = getFullName("Rebecca", "", false, "female"); // Tested to make sure it shows the error message //

console.log(fullName1);
console.log(fullName2);
