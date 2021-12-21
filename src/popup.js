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
  })
}