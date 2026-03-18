import { searchPokemon } from "./api.js";
import { renderPokemon } from "./render.js";

let lastSearch = "";

export function searchInputPokemon(input, loadPokemons){

  input.addEventListener("keyup", async (e) => {

    const value = e.target.value.trim().toLowerCase();
    const container = document.getElementById("pokemon-list");
    lastSearch = value;

    if (value === ""){
      container.innerHTML = ""
      loadPokemons();
      return;
    }

    const pokemon = await searchPokemon(value);

    if (lastSearch !== value) return;

    container.innerHTML = "";

    if (pokemon) {
      renderPokemon(pokemon);
    } else {
      container.innerHTML = "<p>Pokémon não encontrado</p>";
    }
  });

}
