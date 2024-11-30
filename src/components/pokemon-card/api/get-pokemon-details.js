import axios from "axios";

export const getPokemonDetails = async (name) => {
  try {

    const endpoint =  `https://pokeapi.co/api/v2/pokemon/${name}`;
    const { data } = await axios.get(endpoint);
    return data;

  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch Pokémon details");
  }
};
