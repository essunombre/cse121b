/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
//Declare and instantiate a variable to hold your name. Identify the variable as "fullName".
let fullName = "Jose David Albancando Robles";

//Declare and instantiate a variable to hold the current year. Identify the variable as "currentYear".
const d = new Date();
let currentYear = d.getFullYear();
//Declare and instantiate a variable to hold the file path (location) and file name of the image that you
//placed in the images folder as a string. Identify the variable as "profilePicture".
const profilePicture = "images/joseDavid.jpg";

/* Step 3 - Element Variables */
//This location will not change
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");

let imageElement = document.querySelector('img')
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

/* Step 5 - Array */
// let favoriteFood = [
//   "Guanabana",
//   "kickin chicken sandwich",
//   "Spicy Chicken Sandwich",
//   "Tacos",
//   "Ajiaco",
//   "Bandeja Paisa",
//   "Cazuela de Frijoles",
// ];
let favoriteFood = [
  "Guanabana",
  "Kickin chicken sandwich",
  "Spicy Chicken Sandwich",
  "Tacos",
  "Ajiaco",
  "Bandeja Paisa",
  "Cazuela de Frijoles",
];
foodElement.innerHTML += `<br>${favoriteFood}`;

let additionalFood = 'Arroz con Pollo';
favoriteFood.push(additionalFood);

foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.pop()
foodElement.innerHTML += `<br>${favoriteFood}`;

