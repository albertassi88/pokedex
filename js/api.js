const API_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemons(limit, offset) {

    const response = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`);
    const data = await response.json();

    return data.results;

}
