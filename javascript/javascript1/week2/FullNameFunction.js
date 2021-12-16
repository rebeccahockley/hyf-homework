function getFullName(firstname, surname, useFormalName, gender) {
  if (useFormalName === true) {
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
const fullName2 = getFullName("Rebecca", "Hockley", false, "female");

console.log(fullName1);
console.log(fullName2);
