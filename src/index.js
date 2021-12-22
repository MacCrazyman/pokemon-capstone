import { fillPopUp, submitComment, getComments } from './popup.js';
import './style.css';
import { pokemon } from './fake_pokemon.js';

const commentForm = document.querySelector('#add_comment_form');
const userField = document.querySelector('#username');
const commentField = document.querySelector('#comment');
const commentBox = document.querySelector('#comments_box');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const commentItem = {
    item_id: pokemon.name,
    username: userField.value,
    comment: commentField.value,
  };
  submitComment(commentItem);
});

fillPopUp(pokemon);

getComments(pokemon.name).then((Response) => {
  commentBox.textContent = Response;
});