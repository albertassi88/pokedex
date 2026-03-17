import { searchPokemon } from "./api.js";
import { renderPokemon } from "./render.js";

export function searchInputPokemon(input){

  input.addEventListener("keyup", async (e) => {

    const value = e.target.value.trim();

    const container = document.getElementById("pokemon-list");

    if (value === ""){
      location.reload();
      return;
    }

    const pokemon = await searchPokemon(value);

    container.innerHTML = "";

    if (pokemon){
      renderPokemon(pokemon);
    } else {
      container.innerHTML = "<p>Pokémon não encontrado</p>";
    }

  });

}
