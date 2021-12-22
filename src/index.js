import { fillPopUp, submitComment } from './popup';
import './style.css';
import {pokemon} from './fake_pokemon.js';

const commentForm = document.querySelector('#add_comment_form');
const userField = document.querySelector('#username');
const commentField = document.querySelector('#comment');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const commentItem = {
    "item_id": pokemon.name,
    "username": userField.value,
    "comment": commentField.value
  }
  submitComment(commentItem);
})

fillPopUp(pokemon);