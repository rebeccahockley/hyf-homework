const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName == "") {
    console.log("Name must be filled out");
  } else if (class07Students.includes(studentName) === false) {
    if (class07Students.length < 6 || studentName == "The Queen") {
      class07Students.push(studentName);
    }
  } else if (class07Students.includes(studentName) === true) {
    console.log("Student " + studentName + " is already in the class");
  } else {
    console.log("Cannot add more students to class 07");
  }
}

addStudentToClass("Jon");
addStudentToClass("Ben");
addStudentToClass("Patricia");
addStudentToClass("Bob");
addStudentToClass("Susan");
addStudentToClass("Susan");
addStudentToClass("Matthew");
addStudentToClass("The Queen");
addStudentToClass("The Queen");

console.log(class07Students);

function getNumberOfStudents() {
  console.log(class07Students.length);
}

getNumberOfStudents();
