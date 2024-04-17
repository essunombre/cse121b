let names = ["Nancy", "Blessing", "Jorge", "Svetlana", "Bob"];
console.log(names[0]);

// Using the array.filter() method, create an array named namesB
// with only those names from the name array that start with the character 'B'.

// const namesB = names.filter(name => name[0] === 'B' )
const namesB = names.filter((name) => name.charAt(0) === "B");
console.log(namesB);


// Using the array.map() method, create a new array named namesLength that contains
//  the length of each name in the names array. Expected output is [5, 8, 5, 8, 3].
const namesLength = names.map((name) => name.length);
console.log(namesLength);

// Using the names.reduce() method, create an expression that returns the average 
// string length of the names in the names array. Expected output is 5.8.
const averageString =
  names.reduce((accumulator, name) => accumulator + name.length, 0) /  names.length;
console.log(averageString);


// Activity 1 - Map
let numbers = ['one', 'two', 'three'];

const htmlNumbers = numbers.map((number) => `<li>${number}</li>`)
console.log(htmlNumbers);

const listElement = document.getElementById('myList');
listElement.innerHTML = htmlNumbers;

//Activity 2 - Map
const grades = ['A', 'B', 'A'];

function convertGrades (grade){
  if (grade === 'A') {
    return 4;
  }
  else if(grade === 'B') {
    return 3;
  }
  else if(grade === 'C') {
    return 2;
  }
  else{
    return 1;
  }
}
const gradesValue = grades.map(convertGrades);
console.log(gradesValue);

//Activity 3 - Reduce
const gpa = gradesValue.reduce((accumulator, grade) => accumulator + grade)/gradesValue.length;
console.log(gpa)

// Activity 4 - Filter
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const longFruits = fruits.filter((fruit) => fruit.length > 6);
console.log(longFruits);

// Activity 5 - indexOf 
const numeritos = [12, 34, 21, 54];
let lucykNumber = 21
const aVer = numeritos.indexOf(lucykNumber);
console.log(aVer);

