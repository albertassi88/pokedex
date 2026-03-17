import { getPokemons, getPokemonDetails } from "./api.js";
import { renderPokemon } from "./render.js";
import { searchInputPokemon } from "./search.js";
import { setupPagination } from "./pagination.js";

const searchInput = document.getElementById("search");

const page = { value: 1 };
const limit = 18;
const { renderPagination } = setupPagination({
  page,
  setPage,
  loadPokemons,
  limit
});


async function loadPokemons(){

  renderPagination();

  const offset = (page.value - 1) * limit;

  const pokemons = await getPokemons(limit, offset);

  const container = document.getElementById("pokemon-list");
  container.innerHTML = "";

  for(const pokemon of pokemons){
    const details = await getPokemonDetails(pokemon.url);
    renderPokemon(details);
  }

}

function setPage(newPage) {
  page.value = newPage;
}

loadPokemons();

searchInputPokemon(searchInput, loadPokemons);




