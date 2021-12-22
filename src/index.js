// IMPORTS
import './style.css';
import arrayPokemonLinks from './apiFunctions.js';
import { fillPopUp, submitComment, getComments } from './popup.js';
import { pokemon } from './fake_pokemon.js';
// ELEMENTS
const popUpWindow = document.querySelector('#comments_popup');
const pokemonContainer = document.querySelector('#pokemon-container');
const commentForm = document.querySelector('#add_comment_form');
const userField = document.querySelector('#username');
const commentField = document.querySelector('#comment');
const commentTable = document.querySelector('#comments_table');
const closePopUp = document.querySelector('#popup_close');

// FUNCTIONS
const capitalizeString = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const createComment = (commentObject) => {
  const commentRow = document.createElement('tr');
  const commentDate = document.createElement('td');
  const commentUser = document.createElement('td');
  const commentContent = document.createElement('td');
  commentDate.textContent = commentObject.creation_date;
  commentUser.textContent = commentObject.username;
  commentContent.textContent = commentObject.comment;
  commentRow.append(commentDate, commentUser, commentContent);
  commentTable.appendChild(commentRow);
};

const createLi = (name, image, pokemonInfo) => {
  // CONSTANT ELEMENTS
  const li = document.createElement('li');
  const imageDiv = document.createElement('div');
  const pokemonImage = document.createElement('img');
  const pokemonName = document.createElement('p');
  const likeButton = document.createElement('button');
  const commentButton = document.createElement('button');
  // FUNCTIONS FOR EVENT LISTENERS
  const formEvent = (event)=> {
    event.preventDefault();
    const commentItem = {
      item_id: pokemonInfo.name,
      username: userField.value,
      comment: commentField.value,
    };
    submitComment(commentItem);
  }
  // SET PROPERTIES OF ELEMENTS
  pokemonName.textContent = name;
  pokemonImage.src = image;
  likeButton.textContent = 'Like';
  commentButton.textContent = 'Comment';
  // EVENT LISTENERS
  commentButton.addEventListener('click', () => {
    popUpWindow.classList.remove('hidden');
    popUpWindow.classList.add('show');
    fillPopUp(pokemonInfo);
    getComments(pokemonInfo.name).then((response) => {
      if (JSON.parse(response).error) return;
      JSON.parse(response).forEach((element) => createComment(element));
    });
    commentForm.addEventListener('submit', formEvent );
  });
  closePopUp.addEventListener('click', () => {
    popUpWindow.classList.remove('show');
    popUpWindow.classList.add('hidden');
    commentTable.innerHTML = '';
    commentForm.removeEventListener('submit', formEvent)
  });
  // APPEND ELEMENTS
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
    const element = createLi(capitalizeString(data.name), data.sprites.front_shiny, data);
    pokemonContainer.appendChild(element);
  });
  return pokemonArray;
};
// EVENT LISTENERS


// CALL FUNCTIONS

getPokemonInfo();

// EXPORTS
export { createLi, capitalizeString, pokemonContainer };
