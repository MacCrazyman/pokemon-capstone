// IMPORTS
import './style.css';
import { getPokemon, arrayPokemonLinks, getPokemonInfo } from './apiFunctions.js';

// ELEMENTS
const pokemonContainer = document.querySelector('#pokemon-container');

// FUNCTIONS
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createLi = (name, image) => {
  const li = document.createElement('li');
  const imageDiv = document.createElement('div');
  const pokemonImage = document.createElement('img');
  const pokemonName = document.createElement('p');
  const likeButton = document.createElement('button');
  const commentButton = document.createElement('button');
  pokemonName.textContent = name;
  pokemonImage.src = image;
  imageDiv.appendChild(pokemonImage);
  li.appendChild(imageDiv);
  li.appendChild(pokemonName);
  li.appendChild(likeButton);
  li.appendChild(commentButton);
};

const renderPokemon = async () => {
  const array = await getPokemonInfo();
}
