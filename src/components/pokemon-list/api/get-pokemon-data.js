import axios from "axios";

const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemonData = async ({ offset, limit }) => {

  try {
    const {data} = await axios.get(
      `${API_BASE_URL}?offset=${offset}&limit=${limit}`,
    );
    return data;

  } catch (error) {
      return error.message;
  }
  
};
