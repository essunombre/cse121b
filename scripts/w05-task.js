/* W05: Programming Tasks */

/* Declare and initialize global variables */
//Declare a const variable named templesElement that references the HTML div element that eventually will be populated with temple data.
const templesElement = document.querySelector("#temples");
// Declare a global empty array variable to store a list of temples named templeList
let templeList = [];
const url =
  "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

/* async displayTemples Function */
const displayTemples = (templeList) => {
  templeList.forEach((temple) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");

    h3.innerHTML = temple.templeName;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.location);

    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    templeList = data;
    displayTemples(templeList);
    console.log(templeList);
  }
};

console.log(templeList);
/* reset Function */
const reset = function () {
  templesElement.innerHTML = "";
};

/* filterTemples Function */
const filterTemples = function (temples) {
  reset();
  var filter = document.getElementById("filtered").value;
  switch (filter) {
    case "utah":
      displayTemples(
        temples.filter((temple) => temple.location.includes("Utah"))
      );
      break;
    case "notutah":
      console.log("I am non Utah");
      displayTemples(
        temples.filter((temple) => !temple.location.includes("Utah"))
      );
      break;
    case "older":
      console.log("Older");
      displayTemples(
        temples.filter(
          (temple) => new Date(temple.dedicated) < new Date("01/01/1950")
        )
      );
      break;
    case "all":
      displayTemples(templeList);
      break;
    case "alpha":
      displayTemples(
        temples.sort((a, b) => {
          if (a.templeName < b.templeName) {
            return -1;
          }
          if (a.templeName > b.templeName) {
            return 1;
          }
          return 0;
        })
      );
  }
};

getTemples();

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => {
  filterTemples(templeList);
});
