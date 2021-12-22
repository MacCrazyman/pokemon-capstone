// IMPORTS
import './style.css';
import arrayPokemonLinks from './apiFunctions.js';
import { fillPopUp, submitComment, getComments } from './popup.js';
import { pokemon } from './fake_pokemon.js';
// ELEMENTS
const pokemonContainer = document.querySelector('#pokemon-container');
const commentForm = document.querySelector('#add_comment_form');
const userField = document.querySelector('#username');
const commentField = document.querySelector('#comment');
const commentBox = document.querySelector('#comments_box');


// FUNCTIONS
const capitalizeString = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const createLi = (name, image) => {
  const li = document.createElement('li');
  const imageDiv = document.createElement('div');
  const pokemonImage = document.createElement('img');
  const pokemonName = document.createElement('p');
  const likeButton = document.createElement('button');
  const commentButton = document.createElement('button');
  pokemonName.textContent = name;
  pokemonImage.src = image;
  likeButton.textContent = 'Like';
  commentButton.textContent = 'Comment';
  imageDiv.appendChild(pokemonImage);
  li.appendChild(imageDiv);
  li.appendChild(pokemonName);
  li.appendChild(likeButton);
  li.appendChild(commentButton);
  return li;
};

const getPokemonInfo = async () => {
  const array = await arrayPokemonLinks();
  const pokemonArray = [];
  array.forEach(async (url) => {
    const data = await fetch(url).then((response) => response.json());
    pokemonArray.push(data);
    const element = createLi(capitalizeString(data.name), data.sprites.front_shiny);
    pokemonContainer.appendChild(element);
  });
  return pokemonArray;
};
// EVENT LISTENERS
commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const commentItem = {
    item_id: pokemon.name,
    username: userField.value,
    comment: commentField.value,
  };
  submitComment(commentItem);
});
// CALL FUNCTIONS
fillPopUp(pokemon);

getComments(pokemon.name).then((Response) => {
  commentBox.textContent = Response;
});

getPokemonInfo();

// EXPORTS
export { createLi, capitalizeString, pokemonContainer };
