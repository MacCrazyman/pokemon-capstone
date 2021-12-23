// IMPORTS
import './style.css';
import arrayPokemonLinks from './apiFunctions.js';
import { fillPopUp, submitComment, getComments } from './popup.js';
import { submitLikes, renderLikes } from './likes.js';

// ELEMENTS
const popUpWindow = document.querySelector('#comments-popup');
const pokemonContainer = document.querySelector('#pokemon-container');
const commentForm = document.querySelector('#add-comment-form');
const userField = document.querySelector('#username');
const commentField = document.querySelector('#comment');
const commentTable = document.querySelector('#comments-table');
const closePopUp = document.querySelector('#popup-close');

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

const cleanForm = () => {
  userField.value = '';
  commentField.value = '';
};

const createLi = (name, image, pokemonInfo, likesArray) => {
  const li = document.createElement('li');
  const imageDiv = document.createElement('div');
  const pokemonImage = document.createElement('img');
  const pokemonName = document.createElement('p');
  const likeButton = document.createElement('button');
  const commentButton = document.createElement('button');
  const pokemonLikes = likesArray.filter((object) => object.item_id === name);

  // FUNCTIONS FOR EVENT LISTENERS
  const updateComments = () => {
    getComments(pokemonInfo.name).then((response) => {
      if (JSON.parse(response).error) return;
      JSON.parse(response).forEach((element) => createComment(element));
    });
  };
  const formEvent = (event) => {
    event.preventDefault();
    const commentItem = {
      item_id: pokemonInfo.name,
      username: userField.value,
      comment: commentField.value,
    };
    submitComment(commentItem).then(() => {
      commentTable.innerHTML = '';
      updateComments();
      cleanForm();
    });
  };

  // SET PROPERTIES OF ELEMENTS
  pokemonName.textContent = name;
  pokemonImage.src = image;
  if (pokemonLikes.length === 0) {
    likeButton.textContent = 'Like';
  } else {
    likeButton.textContent = `Like ${pokemonLikes[0].likes}`;
  }
  commentButton.textContent = 'Comment';

  // EVENT LISTENERS
  commentButton.addEventListener('click', () => {
    popUpWindow.classList.remove('hidden');
    popUpWindow.classList.add('show');
    fillPopUp(pokemonInfo);
    updateComments();
    commentForm.addEventListener('submit', formEvent);
  });
  closePopUp.addEventListener('click', () => {
    popUpWindow.classList.remove('show');
    popUpWindow.classList.add('hidden');
    commentTable.innerHTML = '';
    commentForm.removeEventListener('submit', formEvent);
    cleanForm();
  });

  // APPEND ELEMENTS
  likeButton.addEventListener('click', () => {
    const likeObject = {
      item_id: name,
    };
    submitLikes(likeObject).then(() => window.location.reload());
  });
  imageDiv.appendChild(pokemonImage);
  li.appendChild(imageDiv);
  li.appendChild(pokemonName);
  li.appendChild(likeButton);
  li.appendChild(commentButton);
  return li;
};

const getPokemonInfo = async (likes) => {
  const array = await arrayPokemonLinks();
  const pokemonArray = [];
  array.forEach(async (url) => {
    const data = await fetch(url).then((response) => response.json());
    pokemonArray.push(data);
    const element = createLi(capitalizeString(data.name), data.sprites.front_shiny, data, likes);
    pokemonContainer.appendChild(element);
  });
  return pokemonArray;
};

// CALL FUNCTIONS
renderLikes().then((response) => getPokemonInfo(response));

// EXPORTS
export { createLi, capitalizeString, pokemonContainer };
