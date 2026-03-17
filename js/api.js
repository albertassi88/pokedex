const API_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemons(limit, offset) {
  const response = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`);
  const data = await response.json();
  return data.results;
}

export async function getPokemonDetails(url){
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function searchPokemon(name){
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  if(!response.ok){
    return null;
  }
  const data = await response.json();
  return data;
}

