// IMPORTS
import { createLi, capitalizeString, pokemonContainer } from './index.js';

const getPokemon = () => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0/`).then((response) => response.json());
};

const arrayPokemonLinks = async () => {
  const data = await getPokemon();
  const array = data.results;
  let urlArray = [];
  array.forEach(element => {
    urlArray.push(element.url);
  });
  return urlArray;
};

const getPokemonInfo = async () => {
  const array = await arrayPokemonLinks();
  const pokemonArray = [];
  array.forEach(async url => {
    const data = await fetch(url).then((response) => response.json());
    pokemonArray.push(data);
    const element = createLi(capitalizeString(data.name), data.sprites.front_shiny);
    pokemonContainer.appendChild(element);
  });
  return pokemonArray;
}
  

export { getPokemon, arrayPokemonLinks, getPokemonInfo };
