/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = 
    {
        name : "Jose David Albancando Robles",
        imagePath : "/images/joseDavid.jpg",
        favoriteFoods : [
            "Spicy Chicken Sandwich", 
            "Cazuela de Frijoles", 
            "Sandwich de la Muerte",
            "Lazagna de Pollo",
            "Empanadas"
        ],
        hobbies : [
            "Magic Tricks", 
            "Freestyle", 
            "Street-workout", 
            "Drawing", 
            "Build Split Keyboards"
        ], 
        placesLived : [],
    }

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place : "Bogota", 
        length : "19 Years" 
    }, 
    {
        place : "Salt Lake City", 
        length : "10 Months" 
    }, 
    {
        place : "Georgia", 
        length : "2 Years" 
    }, 
    {
        place : "Medellin", 
        length : "12 Months" 
    },
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.imagePath)
document.querySelector('#photo').setAttribute('alt', myProfile.name)

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})


/* Hobbies List */
const hobbies = myProfile.hobbies

for(const hobby of hobbies){
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
}

/* Places Lived DataList */
myProfile.placesLived.forEach((placesLived) => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd')
    
    dd.textContent = placesLived.length;
    dt.textContent = placesLived.place;

    document.getElementById('places-lived').appendChild(dt);
    document.getElementById('places-lived').appendChild(dd);
})

