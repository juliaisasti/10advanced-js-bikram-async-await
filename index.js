//Ejercicio 1.- Declara una función getRandomPokemon que retorne un pokemon aleatorio.

async function getRandomPokemon() {
  let id = Math.floor(Math.random() * 20);
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  let pokemon = await response.json();

  return pokemon;
}

// Ejercicio 2.- Declara una funcion getImageAndName que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})

async function getImageAndName() {
  let id = Math.floor(Math.random() * 20);

  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  let pokemon = await response.json();

  let name = pokemon.name;
  let img = pokemon.sprites.front_default;

  return { name, img };
}
getImageAndName();

// Ejercicio 3.- Declara una funcion printImageAndName que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:

async function printImageAndName() {
  let id = Math.floor(Math.random() * 20);

  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  let pokemon = await response.json();

  let name = pokemon.name;
  let img = pokemon.sprites.front_default;

  return `<section>
 <img src="${img}" alt="${name}">
 <h1>${name}</h1>
</section>`
}

// Ejercicio 4.- Declara una función getRandomDogImage que retorne la url de la imagen de un perro aleatorio

async function getRandomDogImage() {

    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let dog = await response.json();

    return dog.message
}
getRandomDogImage();

// Ejercicio 5.- Declara una función getRandomPokemonImage que retorne la url de la imagen de un pokemon aleatorio.

async function getRandomPokemonImage() {
  let random = Math.floor(Math.random() * 20);
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${random}`);
  let pokemon = await response.json();
  let img = pokemon.sprites.front_default;
  return img
}

// Ejercicio 6.- Declara una función printPugVsPikachu que pinte la batalla entre "Pug" y "Pikachu" (no se testea)

async function printPugVsPikachu(){
let response = await fetch(`https://dog.ceo/api/breed/Pug/images/random`)
    let pug = await response.json()
let responseDos = await fetch(`https://pokeapi.co/api/v2/pokemon-form/25`)
let pokemon = await responseDos.json()
let pikachu = pokemon.sprites.front_default
return `<section>
            <img src= "${pug}" alt="${pug}">
            <h1>VS.</h1>
            <img src= "${pikachu}" alt="${pikachu}">
        </section>`
}

//Ejercicio 7.- Declara una función getRandomCharacter que retorne un personaje aleatorio.
async function getRandomCharacter(){
  let random = Math.floor(Math.random() * 826)
  let response = await fetch(`https://rickandmortyapi.com/api/character/${random}`)
  let element = await response.json()
  return element
}

// Ejercicio 8.- Declara una función getRandomCharacterInfo que retorne de un personaje su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno, tendrás que hacer otro fetch para llegar a los ultimos datos. Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})
async function getRandomCharacterInfo(){
  let random = Math.floor(Math.random() * 826)
  let response = await fetch(`https://rickandmortyapi.com/api/character/${random}`)
  let element = await response.json()
      let img = element.image
      let name = element.name
      let episodes = element.episode
      let firstEpisode = element.episode[0]
  let responseDos = await fetch(`${firstEpisode}`)
  let aparicion = await responseDos.json()
      let dateEpisode = aparicion.air_date
  return {img, name, episodes, firstEpisode, dateEpisode}
}