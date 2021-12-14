console.log("Dog Calculator");
const dogYearOfBirth = 2000;
let dogYearFuture = 2042;
let dogAgeInHumanYears = dogYearFuture - dogYearOfBirth;
let dogAgeInDogYears = dogAgeInHumanYears * 7;

let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears === true) {
  console.log(
    "Your dog will be " +
      dogAgeInDogYears +
      " years old in " +
      dogYearFuture +
      "."
  );
} else {
  console.log(
    "Your dog will be " +
      dogAgeInHumanYears +
      " human years old in " +
      dogYearFuture +
      "."
  );
}
