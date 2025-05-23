const BASE_URL = 'https://pokeapi.co/api/v2';

//Battle-oriented information (used for name, types, abilities, height/weightm stats and sprites)
export const getPokemonById = async (id) => {
  const res = await fetch(`${BASE_URL}/pokemon/${id}`);
  if (!res.ok) throw new Error('Pokémon not found');
  return res.json();
};

export const getPokemonByName = async (name) => {
  const res = await fetch(`${BASE_URL}/pokemon/${name}`);
  if (!res.ok) throw new Error('Pokémon not found');
  return res.json();
};

//Info text about pokemon
export const getPokemonSpecies = async (url) => {
  console.log(url)
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch species info');
  return res.json();
};
//Fetches a paginated list of pokemon, contains name and url
export const getPokemonList = async (page, limit = 20) => {
  const offset = (page - 1) * limit;
  const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  if (!res.ok) throw new Error('Failed to fetch Pokémon list');
  return res.json();
};
//Expands original list to get sprites,types etc
export const getPokemonDetailsFromList = async (results) => {
  const promises = results.map((pokemon) => fetch(pokemon.url).then(res => res.json()));
  return Promise.all(promises);
};
