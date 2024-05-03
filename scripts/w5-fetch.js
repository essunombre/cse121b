console.log('perro')
const url = "https://pokeapi.co/api/v2/pokemon/dachsbun";
const urlList = "https://pokeapi.co/api/v2/pokemon";
// const url = "https://pokeapi.co/api/v2/pokemon/pyroar";
let results = null;

async function getPokemon(url, doThis) {
  const response = await fetch(url);

  //check if fetch was sucessful
  if (response.ok) {
    const data = await response.json();
    doThis(data);
  }
}
// I will refactor this using a callback in the getPokemon
// async function getPokemonList(url){
//     const response = await fetch(url)
    
//     //checking 
//     if(response.ok){
//         const data = await response.json();
//         doStuffList(data)
//     }

// }
function doStuff(data) {
  const outputElement = document.querySelector("#output");

  results = data;
  console.log(results)
  const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  outputElement.innerHTML = html
  console.log("first :", results);
}


function doStuffList(data){
    const outputList = document.getElementById('outputList')
    pokeList = data.results;
    pokeList.sort((a, b)=>{
        if(a.name < b.name){
            return -1;
        }
        if(a.name > b.name){
            return 1;
        }
        return 0
    })
    pokeList.forEach(pokemon => {
        // let ListPokemon = document.createElement("li");
        // ListPokemon.textContent = pokemon.name;
        // outputList.appendChild(ListPokemon)
        outputList.innerHTML += `<li><a href="${pokemon.url}">${pokemon.name}</a></li>`
    })
    console.log(data)
}

getPokemon(url, doStuff);
getPokemon(urlList, doStuffList)