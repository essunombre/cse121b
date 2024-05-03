console.log("Aqui falla porqu espera results y no una promesa sin resolver");

const urlb = 'https://pokeapi.co/api/v2/pokemon/pyroar';
const resultsb = fetch(urlb);
console.log(resultsb)

//Up to this point no info was retreive yet :( PORQUE doStuff(results) no hara nada nea, no hay nada aun en results.
//esta esperando una results, no una Promise.
//toca delay la ejecucion de doStuff(results) UNTIL fetch termina y la Promise resolves.
//Aqui entra el Async y el Await. que se puede hacer con un then tambien.
//Async y await CAN ONLY be used in functions.

//1. Creo la funcion Asincrona utilizando async.
//2. Ahora la siguiente linea le pongo la keyword Await
console.log("Aqui utilizo async y await");

const urlDatastream = 'https://pokeapi.co/api/v2/pokemon/pyroar';
async function getPokemonDatastream(token){
    const resultsDatastream = await fetch(token)
    console.log(resultsDatastream)
}

getPokemonDatastream(urlDatastream);

//Ya casi, pero tristemente fetch no trae data que pueda ser utilizable Boomer. 
// It returns Datastream
// Luego de usar fetch I need to tell waht I am expecting this to convert to .
// it understands 3 types: json() txt() (html y xml son tipo txt) blob (ninguno de los dos)

console.log("FINAL: Aqui utilizo async y await");

const url = 'https://pokeapi.co/api/v2/pokemon/pyroar';
let results = null;
async function getPokemon(url){
    const response = await fetch(url);
    console.log('Yendo al If')
    //check to see if the fetch was successful
    if (response.ok){
        // the api will send the json but we have to convert the response to json
        //.json() also returns a promise... so we await it as well.
        const data = await response.json()
        console.log('Response fue OK, response es el datastream,aca viene el data donde use Json')
        console.log(data)
        console.log(`Esta es response${response}`);
        console.log(`Esta es data ${data}`)
        doStuff(data);
    }
}

function doStuff(data){
    results = data;
    console.log("First: ", results)
}
getPokemon(url);
console.log("Second :", results)