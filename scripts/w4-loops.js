// loops.js
myInfo = {
  name: "Brother T",
  photo: "images/photo.jpg",
  favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
  hobbies: ["Reading", "Fishing", "Camping"],
  placesLived: [
    {
      place: "Rexburg, ID",
      length: "5 years",
    },
    {
      place: "Ammon, ID",
      length: "3 years",
    },
    {
      place: "Sandy, UT",
      length: "1 year",
    },
  ],
};
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// let favoriteFood1 = document.createElement("li");
// favoriteFood1.textContent = myInfo.favoriteFoods[0];

// let favoriteFood2 = document.createElement("li");
// favoriteFood2.textContent = myInfo.favoriteFoods[1];

// let favoriteFood3 = document.createElement("li");
// favoriteFood3.textContent = myInfo.favoriteFoods[2];

// let favoriteFood4 = document.createElement("li");
// favoriteFood4.textContent = myInfo.favoriteFoods[3];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
// document.querySelector("#favorite-foods").appendChild(favoriteFood1);
// document.querySelector("#favorite-foods").appendChild(favoriteFood2);
// document.querySelector("#favorite-foods").appendChild(favoriteFood3);
// document.querySelector("#favorite-foods").appendChild(favoriteFood4);

foods = myInfo.favoriteFoods;
places = myInfo.placesLived;
console.log(foods);
const favoriteFoodsElement = document.querySelector("#favorite-foods");
const placesLivedElement = document.getElementById('places-lived');

// //Get the favoriteslement
// displayFFwithForEach = () => {
//   foods.forEach((food) => {
//     let listItem = document.createElement("li");
//     listItem.textContent = food;
//     //apendChild adds a node at the end of the elemnt
//     favoriteFoodsElement.appendChild(listItem);
//   });
// };

// displayFFwithForEach();

function getFood(food){
  return `<li>${food}</li>`
}

function getPlace(place){
  return `<dt>${place.place}</dt><dd>${place.length}</dd>`
}

function transformListToHTML(list, templateFunction){
  let htmlString = "";
  list.forEach(item => {
    htmlString += templateFunction(item)
  });
  return htmlString
}

favoriteFoodsElement.innerHTML = transformListToHTML(foods, getFood)
placesLivedElement.innerHTML = transformListToHTML(places, getPlace)

// displayFFwithMap = () => {

//   const foodItemList = foods.map( food => {
//     let listItem = document.createElement('li');
//     listItem.textContent = food;
//     console.log(listItem)
//     return listItem;
//   });
//   foodItemList.forEach(item => favoriteFoodsElement.appendChild(item))
// }
// displayFFwithMap()

// // This is with Map only
// function mapFoodItem(food) {
//   return `<li>${food}</li>`;
// }

// const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
// // we need to flatten the array of strings into one big string. .join does this.
// favoriteFoodsElement.innerHTML = foodListElements.join("");
