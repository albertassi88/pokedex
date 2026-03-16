
export function renderPokemon(pokemon){

  const container = document.getElementById("pokemon-list");

  const card = document.createElement("div");
  card.classList.add("pokemon-card");

  card.innerHTML = `
    <div class="type">${pokemon.types[0].type.name}</div>
    <div class="number">#${pokemon.id}</div>
    <img src="${pokemon.sprites.other['official-artwork'].front_default}" />
    <h3>${pokemon.name}</h3>
  `;

  container.appendChild(card);

}
