import { getPokemons, getPokemonDetails, searchPokemon } from "./api.js";
import { renderPokemon } from "./render.js";
import { searchInputPokemon } from "./search.js";

const searchInput = document.getElementById("search");

let page = 1;
const limit = 18;

async function loadPokemons(){

  const offset = (page - 1) * limit;

  const pokemons = await getPokemons(limit, offset);

  const container = document.getElementById("pokemon-list");
  container.innerHTML = "";

  for(const pokemon of pokemons){
    const details = await getPokemonDetails(pokemon.url);
    renderPokemon(details);
  }

}

loadPokemons();

searchInputPokemon(searchInput);



