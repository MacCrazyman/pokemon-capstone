const getPokemon = () => fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0/').then((response) => response.json());

const arrayPokemonLinks = async () => {
  const data = await getPokemon().then((response) => response.results);
  const urlArray = [];
  data.forEach((element) => {
    urlArray.push(element.url);
  });
  return urlArray;
};

export default arrayPokemonLinks;
