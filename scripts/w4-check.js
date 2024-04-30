console.log("Hola Perritos");

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

//Write a for loop that will iterate through the studentReport array and print to
// the console the current array value if it is below 30.
console.log("Exercise 1 FOR");
for (let index = 0; index < studentReport.length; index++) {
  // if (studentReport[index] < 30){
  //   console.log(studentReport[index])
  // }
  studentReport[index] < LIMIT ? console.log(studentReport[index]) : null;
}

console.log("Exercise 2 WHILE");
// Repeat the previous programming snippet by using a while loop.
let i = 0;
while (i < studentReport.length) {
  studentReport[i] < LIMIT ? console.log(studentReport[i]) : null;
  i++;
}
// Repeat the previous programming snippet by using a forEach loop.
console.log("Exercise 3 FOREACH");
studentReport.forEach(grade =>{
  grade < LIMIT ? console.log(grade) : null;
})

console.log("Exercise 4 FORIN");
for(grade in studentReport){
  studentReport[grade] < LIMIT ? console.log(studentReport[grade]) : null;
}