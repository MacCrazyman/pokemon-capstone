// fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//   method: 'POST',
// })
// .then(response => console.log('Success:', response));

const appId = '2VoylRMjGXYqZZMlt91a';
const involvementAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}`;
import {pokemon} from './fake_pokemon.js';

const getComments = () => {
  return fetch(`${involvementAPI}/comments`).then((Response) => Response.json())
};

const submitComment = (newComment) => {
  return fetch(`${involvementAPI}/comments`,{
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then(Response => Response.json());
}

const fillPopUp = () => {
  const picture = document.querySelector('#popup_picture');
  const name = document.querySelector('#popup_title');
  picture.src = pokemon.sprites.other.dream_world.front_default;
  name.textContent = pokemon.name;
}

export {fillPopUp}