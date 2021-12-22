// fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//   method: 'POST',
// })
// .then(response => console.log('Success:', response));

const appId = '2VoylRMjGXYqZZMlt91a';
const involvementAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}`;


const getComments = () => {
  return fetch(`${involvementAPI}/comments`).then((Response) => Response.json())
};

const submitComment = (newComment) => {
  return fetch(`${involvementAPI}/comments`,{
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
}

const fillPopUp = (selectedPokemon) => {
  const picture = document.querySelector('#popup_picture');
  const name = document.querySelector('#popup_title');
  const height = document.querySelector('#property_height');
  const weight = document.querySelector('#property_weight');
  const baseXp = document.querySelector('#property_baseXp');
  picture.src = selectedPokemon.sprites.other.dream_world.front_default;
  name.textContent = selectedPokemon.name;
  height.textContent = selectedPokemon.height;
  weight.textContent = selectedPokemon.weight;
  baseXp.textContent = selectedPokemon.base_experience;
}


export {fillPopUp, submitComment}